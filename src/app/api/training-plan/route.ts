import { NextResponse } from "next/server";
import sql from "mssql";

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER || "",
    database: process.env.DB_DATABASE,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

// Create a single, persistent connection pool.
// The pool is created once per serverless instance and reused across requests.
const pool = new sql.ConnectionPool(sqlConfig);
const poolConnect = pool.connect();

pool.on('error', err => {
    console.error('SQL Pool Error', err);
});

async function getTrainingData() {
    await poolConnect; // Ensures the pool is connected before making a request
    try {
        const weeksRequest = pool.request();
        const daysRequest = pool.request();

        const weeksResult = await weeksRequest.query(`SELECT * FROM week ORDER BY week_number`);
        const daysResult = await daysRequest.query(`SELECT * FROM day ORDER BY activity_date`);

        // Map the database response to the JSON structure the frontend expects
        return weeksResult.recordset.map(week => {
            const { start_date, total_weekly_km, ...restOfWeek } = week;
            return {
                ...restOfWeek,
                startDate: start_date.toISOString().split('T')[0], // Rename and format
                totalWeeklyKm: total_weekly_km,
                days: daysResult.recordset
                    .filter(day => day.week_id === week.week_id)
                    .map(day => {
                        // Rename activity_date to date
                        const { activity_date, ...restOfDay } = day;
                        return {
                            ...restOfDay,
                            date: activity_date.toISOString().split('T')[0] // Format date as YYYY-MM-DD string
                        };
                    })
            };
        });
    } catch (err) {
        console.error('Database query failed:', err);
        throw new Error('Failed to retrieve training data.');
    }
}

export async function GET() {
    try {
        const data = await getTrainingData();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ message: "Failed to fetch training data" }, { status: 500 });
    }
}

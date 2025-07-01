-- Drop tables in reverse order of creation to avoid foreign key constraints
IF OBJECT_ID('dbo.day', 'U') IS NOT NULL
    DROP TABLE dbo.day;
GO

IF OBJECT_ID('dbo.week', 'U') IS NOT NULL
    DROP TABLE dbo.week;
GO

-- Create the week table to store high-level weekly information
CREATE TABLE week (
    week_id INT PRIMARY KEY IDENTITY(1,1),
    week_number INT NOT NULL UNIQUE,
    start_date DATE NOT NULL,
    focus NVARCHAR(255),
    total_weekly_km DECIMAL(5, 2)
);
GO

-- Create the day table for daily training details
CREATE TABLE day (
    day_id INT PRIMARY KEY IDENTITY(1,1),
    week_id INT NOT NULL,
    activity_date DATE NOT NULL,
    day_of_week NVARCHAR(10),
    activity NVARCHAR(255),
    details NVARCHAR(MAX),
    pace_guide NVARCHAR(MAX),
    notes NVARCHAR(MAX),
    CONSTRAINT FK_day_week FOREIGN KEY (week_id) REFERENCES week(week_id)
);
GO


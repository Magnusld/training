import Link from "next/link";
import TodayTraining from "../components/TodayTraining";
import {
  getTodaysTraining,
  getTodayString,
  TrainingWeek,
} from "@/utils/dateUtils";

async function getPlan() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/training-plan`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch training plan');
  }
  return res.json();
}

export default async function HomePage() {
  const plan: TrainingWeek[] = await getPlan();
  const todayStr = getTodayString();
  const todaysActivity = getTodaysTraining(plan);

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 md:pt-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient-primary h-14">
        Marathon Training
      </h1>

      <div className="w-full max-w-md mb-10">
        <TodayTraining trainingDay={todaysActivity} currentDate={todayStr} />
      </div>

      <Link href="/plan" className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg">
          View Full Training Plan
        </Link>

      <p className="mt-12 text-center text-muted text-sm">
        Marathon Date: September 6, 2025
      </p>
    </div>
  );
}

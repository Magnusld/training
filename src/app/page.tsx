import Link from "next/link";
import TodayTraining from "../components/TodayTraining";
import trainingPlanData from "../data/trainingPlan.json";
import {
  getTodaysTraining,
  getTodayString,
  TrainingWeek,
} from "../utils/dateUtils";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const plan: TrainingWeek[] = trainingPlanData as TrainingWeek[];
  const todayStr = getTodayString();
  const todaysActivity = getTodaysTraining(plan);

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 md:pt-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 h-14">
        Marathon Training
      </h1>

      <div className="w-full max-w-md mb-10">
        <TodayTraining trainingDay={todaysActivity} currentDate={todayStr} />
      </div>

      <Link href="/plan" legacyBehavior>
        <a className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg">
          View Full Training Plan
        </a>
      </Link>
      <p className="mt-12 text-center text-gray-400 text-sm">
        Marathon Date: September 6, 2025
      </p>
    </div>
  );
}

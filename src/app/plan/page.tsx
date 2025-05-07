import Link from "next/link";
import FullPlanDisplay from "../../components/FullPlanDisplay";
import trainingPlanData from "../../data/trainingPlan.json";
import { getFutureTrainings, TrainingWeek } from "../../utils/dateUtils"; // Using getFutureTrainings

export default function FullPlanPage() {
  // Cast the imported JSON to the TrainingWeek[] type
  const allWeeks: TrainingWeek[] = trainingPlanData as TrainingWeek[];
  const upcomingPlan = getFutureTrainings(allWeeks); // Get only current and future parts of the plan

  return (
    <div>
      <nav className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Full Training Plan
        </h1>
        <Link href="/" legacyBehavior>
          <a className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Back to Today
          </a>
        </Link>
      </nav>
      {upcomingPlan.length > 0 ? (
        <FullPlanDisplay plan={allWeeks} />
      ) : (
        <p className="text-center text-xl text-gray-300 mt-10">
          The marathon date has passed or the plan is not available for future
          dates.
        </p>
      )}
      <div className="mt-10 text-center">
        <Link href="/" legacyBehavior>
          <a className="px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Back to Today
          </a>
        </Link>
      </div>
    </div>
  );
}

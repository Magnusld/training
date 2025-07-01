import Link from "next/link";
import FullPlanDisplay from "../../components/FullPlanDisplay";
import { getFutureTrainings, TrainingWeek } from "@/utils/dateUtils"; // Using getFutureTrainings

async function getPlan() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/training-plan`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch training plan');
  }
  return res.json();
}

export default async function FullPlanPage() {
  const allWeeks: TrainingWeek[] = await getPlan();
  const upcomingPlan = getFutureTrainings(allWeeks); // Get only current and future parts of the plan

  return (
    <div>
      <nav className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center text-gradient-primary">
          Full Training Plan
        </h1>
        <Link href="/" className="px-5 py-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg shadow-md transition duration-300">
            Back to Today
          </Link>
      </nav>
      {upcomingPlan.length > 0 ? (
        <FullPlanDisplay plan={allWeeks} />
      ) : (
        <p className="text-center text-xl text-muted mt-10">
          The marathon date has passed or the plan is not available for future
          dates.
        </p>
      )}
      <div className="mt-10 text-center">
        <Link href="/" className="px-5 py-2 bg-surface hover:bg-surface-elevated text-foreground font-semibold rounded-lg shadow-md transition duration-300 border border-border">
            Back to Today
          </Link>
      </div>
    </div>
  );
}

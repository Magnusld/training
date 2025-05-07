'use client';
import React from 'react';
import { TrainingWeek } from '../utils/dateUtils';
import WeekCard from './WeekCard';

interface FullPlanDisplayProps {
  plan: TrainingWeek[];
}

const FullPlanDisplay: React.FC<FullPlanDisplayProps> = ({ plan }) => {
  if (!plan || plan.length === 0) {
    return <p className="text-center text-lg">No training plan available.</p>;
  }

  return (
    <div className="space-y-8">
      {plan.map((week) => (
        <WeekCard key={week.week} weekData={week} />
      ))}
    </div>
  );
};

export default FullPlanDisplay;

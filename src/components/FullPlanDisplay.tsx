'use client';
import React, { useEffect, useRef } from 'react';
import { TrainingWeek, getTodayString } from '../utils/dateUtils';
import WeekCard from './WeekCard';

interface FullPlanDisplayProps {
  plan: TrainingWeek[];
}

const FullPlanDisplay: React.FC<FullPlanDisplayProps> = ({ plan }) => {
  const todayRef = useRef<HTMLDivElement>(null);
  const todayString = getTodayString();

  useEffect(() => {
    // Scroll to today's training with a slight delay to ensure rendering is complete
    if (todayRef.current) {
      setTimeout(() => {
        todayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, []);

  if (!plan || plan.length === 0) {
    return <p className="text-center text-lg">No training plan available.</p>;
  }

  return (
    <div className="space-y-8">
      {plan.map((week) => {
        // Check if this week contains today
        const hasTodayTraining = week.days.some(day => day.date === todayString);

        return (
          <div key={week.week} ref={hasTodayTraining ? todayRef : undefined}>
            <WeekCard
              weekData={week}
              isCurrentWeekView={hasTodayTraining}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FullPlanDisplay;

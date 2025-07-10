'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TrainingWeek, getTodayString, getDayStatus } from '../utils/dateUtils';
import WeekCard from './WeekCard';

interface FullPlanDisplayProps {
  plan: TrainingWeek[];
}

const FullPlanDisplay: React.FC<FullPlanDisplayProps> = ({ plan }) => {
  const todayRef = useRef<HTMLDivElement>(null);
  const todayString = getTodayString();
  const [showPreviousWeeks, setShowPreviousWeeks] = useState(false);

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

  // Separate previous weeks from current/future weeks
  const previousWeeks: TrainingWeek[] = [];
  const currentAndFutureWeeks: TrainingWeek[] = [];

  plan.forEach((week) => {
    // Check if all days in the week are in the past
    const allDaysPast = week.days.every(day => getDayStatus(day.date) === 'past');

    if (allDaysPast) {
      previousWeeks.push(week);
    } else {
      currentAndFutureWeeks.push(week);
    }
  });

  return (
    <div className="space-y-8">
      {/* Previous weeks section */}
      {previousWeeks.length > 0 && (
        <div>
          <button
            onClick={() => setShowPreviousWeeks(!showPreviousWeeks)}
            className="w-full mb-8 p-4 rounded-lg shadow-xl bg-surface-elevated border border-border hover:bg-surface transition duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-accent">
                {showPreviousWeeks ? '▼' : '▶'}
              </span>
              <h3 className="text-2xl font-bold text-accent">
                Previous Weeks
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">
                {previousWeeks.length} week{previousWeeks.length !== 1 ? 's' : ''}
              </span>
              <span className="text-lg font-semibold text-accent-light">
                {showPreviousWeeks ? 'Click to hide' : 'Click to show'}
              </span>
            </div>
          </button>

          {showPreviousWeeks && (
            <div className="space-y-8 mb-8">
              {previousWeeks.map((week) => (
                <div key={week.week_id}>
                  <WeekCard
                    weekData={week}
                    isCurrentWeekView={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Current and future weeks */}
      {currentAndFutureWeeks.map((week) => {
        // Check if this week contains today
        const hasTodayTraining = week.days.some(day => day.date === todayString);

        return (
          <div key={week.week_id} ref={hasTodayTraining ? todayRef : undefined}>
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

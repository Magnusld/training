'use client';
import React from 'react';
import { TrainingDay, formatDateString } from '../utils/dateUtils';

interface TodayTrainingProps {
  trainingDay: TrainingDay | null;
  currentDate: string; // YYYY-MM-DD
}

const TodayTraining: React.FC<TodayTrainingProps> = ({ trainingDay, currentDate }) => {
  if (!trainingDay) {
    return (
      <div className="bg-surface p-6 rounded-lg shadow-lg text-center border border-border">
        <h2 className="text-2xl font-bold mb-2 text-accent">Today&apos;s Plan ({formatDateString(currentDate)})</h2>
        <p className="text-lg text-muted">No specific training scheduled for today. Perhaps it&apos;s a rest day or time for some light cross-training!</p>
      </div>
    );
  }

  return (
    <div className="bg-surface mt-2 p-6 rounded-lg shadow-lg border border-border">
      <h2 className="text-3xl font-bold mb-3 text-accent">
        Today: {formatDateString(trainingDay.date)}
      </h2>
      <div className="mb-4">
        <p className="text-xl font-semibold text-accent-light">{trainingDay.activity}</p>
        <p className="text-lg text-foreground">{trainingDay.details}</p>
      </div>
      {trainingDay.notes && (
        <div>
          <p className="text-sm font-semibold text-success">Notes:</p>
          <p className="text-muted italic">{trainingDay.notes}</p>
          {trainingDay.pace_guide && <p className="text-xs italic mt-1 text-accent-lighter">Pace: {trainingDay.pace_guide}</p>}
        </div>
      )}
    </div>
  );
};

export default TodayTraining;


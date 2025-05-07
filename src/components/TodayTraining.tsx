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
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {/* Corrected: Escaped apostrophe */}
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Today&apos;s Plan ({formatDateString(currentDate)})</h2>
        {/* Corrected: Escaped apostrophe */}
        <p className="text-lg">No specific training scheduled for today. Perhaps it&apos;s a rest day or time for some light cross-training!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-3 text-blue-400">
        Today: {formatDateString(trainingDay.date)} ({trainingDay.dayOfWeek})
      </h2>
      <div className="mb-4">
        <p className="text-xl font-semibold text-yellow-400">{trainingDay.activity}</p>
        <p className="text-lg text-gray-300">{trainingDay.details}</p>
      </div>
      {trainingDay.notes && (
        <div>
          <p className="text-sm font-semibold text-green-400">Notes:</p>
          <p className="text-gray-400 italic">{trainingDay.notes}</p>
        </div>
      )}
    </div>
  );
};

export default TodayTraining;


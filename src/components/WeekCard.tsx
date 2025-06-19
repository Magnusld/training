"use client";
import React from "react";
import {
  TrainingWeek,
  TrainingDay,
  formatDateString,
  getDayStatus,
} from "../utils/dateUtils";

interface WeekCardProps {
  weekData: TrainingWeek;
  isCurrentWeekView?: boolean; // To slightly alter display for a single current/upcoming week
}

const DayDisplay: React.FC<{ day: TrainingDay }> = ({ day }) => {
  const status = getDayStatus(day.date);
  let bgColor = "bg-gray-700";
  let textColor = "text-gray-300";

  if (status === "today") {
    bgColor = "bg-blue-600";
    textColor = "text-white";
  } else if (status === "past") {
    bgColor = "bg-gray-800";
    textColor = "text-gray-500";
  }

  return (
    <div
      className={`p-3 rounded-md ${bgColor} ${textColor} mb-2 transition-all duration-300 ease-in-out`}
    >
      <p className="font-semibold text-sm">
        {formatDateString(day.date, "EEE, MMM d")}
      </p>
      <p className="text-lg font-bold ${status === 'today' ? 'text-yellow-300' : status === 'future' ? 'text-yellow-400' : 'text-yellow-600'}">
        {day.activity}
      </p>
      <p className="text-sm">{day.details}</p>
      {day.notes && (
        <p className="text-xs italic mt-1 text-gray-400">{day.notes}</p>
      )}
      {day.pace_guide && (
        <p className="text-xs italic mt-1 text-gray-400">
          Pace: {day.pace_guide}
        </p>
      )}
    </div>
  );
};

const WeekCard: React.FC<WeekCardProps> = ({ weekData }) => {
  return (
    <div
      className={`mb-8 p-4 rounded-lg shadow-xl 
         bg-gray-750 border border-gray-700`}
    >
      <div className={"flex flex-row justify-between"}>
        <h3 className="text-2xl font-bold mb-1 text-indigo-400">
          Week {weekData.week}
        </h3>
        <h3 className="text-2xl font-bold mb-1 text-indigo-400">
          {weekData.totalWeeklyKm}km
        </h3>
      </div>
      <p className="text-sm text-gray-400 mb-1">
        Starting: {formatDateString(weekData.startDate)}
      </p>
      <p className="text-md font-semibold text-teal-400 mb-4">
        {weekData.focus}
      </p>
      <div className="space-y-3">
        {weekData.days.map((day) => (
          <DayDisplay key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeekCard;

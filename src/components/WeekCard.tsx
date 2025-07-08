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
  let bgColor = "bg-surface";
  let textColor = "text-foreground";

  if (status === "today") {
    bgColor = "bg-accent";
    textColor = "text-white";
  } else if (status === "past") {
    bgColor = "bg-surface-elevated";
    textColor = "text-muted";
  }

  return (
    <div
      className={`p-3 rounded-md ${bgColor} ${textColor} mb-2 transition-all duration-300 ease-in-out border border-border`}
    >
      <p className="font-semibold text-sm">
        {formatDateString(day.date, "EEE, MMM d")}
      </p>
      <p className={`text-lg font-bold ${status === 'today' ? 'text-white' : status === 'future' ? 'text-accent-light' : 'text-muted'}`}>
        {day.activity}
      </p>
      <p className="text-sm">{day.details}</p>
      {day.notes && (
        <p className="text-xs italic mt-1 text-muted">{day.notes}</p>
      )}
      {day.pace_guide && (
        <p className="text-xs italic mt-1 text-muted">
          Pace: {day.pace_guide}
        </p>
      )}
    </div>
  );
};

const WeekCard: React.FC<WeekCardProps> = ({ weekData }) => {
  // Extract week number from either week property or week_id
  const weekNumber = weekData.week || (weekData.week_id ? parseInt(weekData.week_id) : null);

  return (
    <div
      className={`mb-8 p-4 rounded-lg shadow-xl 
         bg-surface-elevated border border-border`}
    >
      <div className={"flex flex-row justify-between"}>
        <h3 className="text-2xl font-bold mb-1 text-accent">
          Week {weekNumber}
        </h3>
        <h3 className="text-2xl font-bold mb-1 text-accent">
          {weekData.totalWeeklyKm}km
        </h3>
      </div>
      <p className="text-sm text-muted mb-1">
        Starting: {formatDateString(weekData.startDate)}
      </p>
      <p className="text-md font-semibold text-accent-light mb-4">
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

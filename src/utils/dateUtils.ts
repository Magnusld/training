import { format, parseISO, isToday, isFuture, isPast, compareAsc } from 'date-fns';

export interface TrainingDay {
  date: string; // "YYYY-MM-DD"
  dayOfWeek: string;
  activity: string;
  details: string;
  notes?: string;
}

export interface TrainingWeek {
  week: number;
  startDate: string; // "YYYY-MM-DD"
  focus: string;
  days: TrainingDay[];
}

export const getTodayString = (): string => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const formatDateString = (dateStr: string, dateFormat: string = 'EEEE, MMMM d'): string => {
  try {
    return format(parseISO(dateStr), dateFormat);
  } catch (error) {
    console.error("Error formatting date string:", dateStr, error);
    return "Invalid Date";
  }
};

export const getTodaysTraining = (plan: TrainingWeek[]): TrainingDay | null => {
  const todayStr = getTodayString();
  for (const week of plan) {
    const foundDay = week.days.find(day => day.date === todayStr);
    if (foundDay) {
      return foundDay;
    }
  }
  return null;
};

export const getFutureTrainings = (plan: TrainingWeek[]): TrainingWeek[] => {
  const todayStr = getTodayString();
  const futurePlan: TrainingWeek[] = [];

  plan.forEach(week => {
    const futureDays = week.days.filter(day => isFuture(parseISO(day.date)) || isToday(parseISO(day.date)));
    if (futureDays.length > 0) {
      // If the week's start date is in the past but it has future days, include it
      // Otherwise, only include weeks that start today or in the future
      if (isPast(parseISO(week.startDate)) && futureDays.length < week.days.length && futureDays.length > 0) {
         futurePlan.push({ ...week, days: futureDays });
      } else if (!isPast(parseISO(week.startDate)) || futureDays.length === week.days.length) {
         futurePlan.push({ ...week, days: futureDays });
      }
    }
  });
 // Sort weeks by start date just in case
  return futurePlan.sort((a,b) => compareAsc(parseISO(a.startDate), parseISO(b.startDate)));
};


export const getDayStatus = (dateStr: string): 'past' | 'today' | 'future' => {
  const date = parseISO(dateStr);
  if (isToday(date)) return 'today';
  if (isPast(date)) return 'past';
  return 'future';
};

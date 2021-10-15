import { endOfMonth, getDaysInMonth, setDate, startOfMonth } from 'date-fns';
import { createContext } from 'react';

export const monthFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
});

export const yearFormatter = new Intl.DateTimeFormat('default', {
  year: 'numeric',
});

export const monthYearFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
  year: 'numeric',
});

export function resolveWeeks(month: Date): Date[][] {
  const firstDayOfMonth = startOfMonth(month);
  const firstWeekDay = firstDayOfMonth.getDay();
  const lastDayOfMonth = endOfMonth(month);
  const lastWeekDay = lastDayOfMonth.getDay();
  const daysOfMonth = getDaysInMonth(month);
  const emptyStartDays = new Array(firstWeekDay).fill(null);
  const emptyEndDays = new Array(6 - lastWeekDay).fill(null);
  const monthDays = new Array(daysOfMonth)
    .fill(null)
    .map((_, index) => setDate(month, index + 1));
  const calendarDays = emptyStartDays.concat(monthDays, emptyEndDays);
  const weeks = new Array(calendarDays.length / 7).fill(null);

  return weeks.map((_, index) => calendarDays.slice(index * 7, (index * 7) + 7));
}

export function resolveYearRange(year: Date, before = 4, after = 4) {
  const startYear = year.getFullYear() - before;
  const endYear = year.getFullYear() + after + 1;

  return new Array(endYear - startYear)
    .fill(null)
    .map((_, index) => startYear + index);
}

interface DayContextValue {
  startDate: Date;
  endDate: Date;
  onChange: (day: Date) => void;
}

export const DayContext = createContext<DayContextValue>(undefined);

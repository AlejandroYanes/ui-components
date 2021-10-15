import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from 'date-fns';

const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return date ? dateFormatter.format(date) : undefined;
}

const timeFormatter = new Intl.DateTimeFormat('default', {
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

export function formatTime(date: Date): string {
  return date ? timeFormatter.format(date) : undefined;
}

const dateTimeFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export function formatDateTime(date: Date | string): string {
  return date ? dateTimeFormatter.format(new Date(date)) : undefined;
}

const shortDateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
  year: '2-digit',
});

const shorterDateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
});

export function formatShortDate(date: Date): string {
  if (date) {
    const isForThisYear = date.getFullYear() === new Date().getFullYear();
    return isForThisYear
      ? shorterDateFormatter.format(date)
      : shortDateFormatter.format(date);
  }
  return undefined;
}

const monthFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
});

export function getMonthName(date: Date): string {
  return date ? monthFormatter.format(date) : undefined;
}

export function getMonthLabel(date: Date) {
  const today = new Date();

  if (date.getFullYear() === today.getFullYear()) {
    return getMonthName(date).slice(0, 3);
  }

  const year = date.getFullYear().toString(10).slice(-2);
  return `${getMonthName(date).slice(0, 3)}/${year}`;
}

function resolveTimeUnit(date: Date, targetDate: Date) {
  const units = [
    { unit: 'month', diffFunction: differenceInMonths },
    { unit: 'day', diffFunction: differenceInDays },
    { unit: 'hour', diffFunction: differenceInHours },
    { unit: 'minute', diffFunction: differenceInMinutes },
  ];

  const unitOfTime = units.find((unit) => unit.diffFunction(date, targetDate) !== 0);

  if (!!unitOfTime) {
    const { diffFunction, unit } = unitOfTime;
    const difference = diffFunction(date, targetDate);

    return {
      unit: Math.abs(difference) === 1 ? unit : `${unit}s`,
      diff: difference,
    };
  }

  return { unit: 'equal' };
}

const relativeTimeFormatter = new Intl.RelativeTimeFormat('default', {
  style: 'long',
  numeric: 'auto',
});

export function getRelativeTime(fromDate:Date | string, relativeTo?: Date | string) {
  const { unit, diff } = resolveTimeUnit(
    new Date(fromDate),
    relativeTo ? new Date(relativeTo) : new Date(),
  );

  if (unit === 'equal') {
    return 'Right now';
  }

  return relativeTimeFormatter.format(diff, unit as any);
}

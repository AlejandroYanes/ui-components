import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from 'date-fns';

export function formatDate(date: Date, locale = 'default'): string {
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return date ? dateFormatter.format(date) : undefined;
}

export function formatTime(date: Date, locale = 'default'): string {
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  return date ? timeFormatter.format(date) : undefined;
}

export function formatDateTime(date: Date | string, locale = 'default'): string {
  const dateTimeFormatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return date ? dateTimeFormatter.format(new Date(date)) : undefined;
}

export function formatShortDate(date: Date, locale = 'default'): string {
  if (date) {
    const shorterDateFormatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
    });
    const shortDateFormatter = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    });
    const isForThisYear = date.getFullYear() === new Date().getFullYear();
    return isForThisYear
      ? shorterDateFormatter.format(date)
      : shortDateFormatter.format(date);
  }
  return undefined;
}

export function getMonthName(date: Date, locale = 'default'): string {
  const monthFormatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
  });
  return date ? monthFormatter.format(date) : undefined;
}

export function getMonthLabel(date: Date, locale = 'default') {
  const today = new Date();

  if (date.getFullYear() === today.getFullYear()) {
    return getMonthName(date, locale).slice(0, 3);
  }

  const year = date.getFullYear().toString(10).slice(-2);
  return `${getMonthName(date, locale).slice(0, 3)}/${year}`;
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

export function getRelativeTime(
  fromDate:Date | string,
  relativeTo?: Date | string,
  locale = 'default',
) {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    style: 'long',
    numeric: 'auto',
  });
  const { unit, diff } = resolveTimeUnit(
    new Date(fromDate),
    relativeTo ? new Date(relativeTo) : new Date(),
  );

  if (unit === 'equal') {
    return 'Right now';
  }

  return relativeTimeFormatter.format(diff, unit as any);
}

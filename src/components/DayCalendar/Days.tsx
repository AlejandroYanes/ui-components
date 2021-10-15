import React, { FunctionComponent } from 'react';
import Day from './Day';
import Month from './Month';

interface Props {
  days: Date[];
  value: Date;
  handleDayClick: (event) => void;
}

function matchDays(dateLeft: Date, dateRight: Date) {
  return (
    !!dateLeft && !!dateRight &&
    dateLeft.getDate() === dateRight.getDate() &&
    dateLeft.getMonth() === dateRight.getMonth()
  );
}

function getMonthKey(day: Date) {
  return `month-${day.getMonth()}_year-${day.getFullYear()}`;
}

const Days: FunctionComponent<Props> = (props) => {
  const { days, value, handleDayClick } = props;

  return days.reduce(({ lastMonth, items }, day) => {
    const dayElement = (
      <Day
        key={day.toISOString()}
        day={day}
        isSelected={matchDays(day, value)}
        onClick={handleDayClick}
      />
    );

    if (lastMonth === day.getMonth()) {
      return {
        lastMonth,
        items: items.concat([dayElement]),
      };
    }

    return {
      lastMonth: day.getMonth(),
      items: items.concat([
        <Month key={getMonthKey(day)} day={day} />,
        dayElement,
      ]),
    };
  }, { lastMonth: -1, items: [] } as any).items;
};

export default Days;

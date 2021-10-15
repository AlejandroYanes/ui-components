/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useMemo } from 'react';
import { arePropsEqual } from 'helpers';
import { useUniqueIds } from 'hooks/UI';
import { daysOfTheWeek } from './types';
import { DayContext, resolveWeeks } from './utils';
import { StyledDays, StyledWeekDay } from './styled/days';
import Day from './Day';

const dayFormatter = new Intl.DateTimeFormat('default', {
  weekday: 'short',
});

const WeekDays = (): any => daysOfTheWeek.map((d) => (
  <StyledWeekDay key={d.getTime()}>{dayFormatter.format(d)}</StyledWeekDay>
));

const Week = ({ week }): any => (
  <tr>
    {week.map((d, index) => (
      <Day key={d ? d.getTime() : `empty-day-${index}`} day={d} />
    ))}
  </tr>
);

const Weeks = ({ weeks }) => weeks.map(
  (w, index) => (
    <Week
      key={`week-${index}`}
      week={w}
    />
  ),
);

interface Props {
  viewDate: Date;
  startDate: Date;
  endDate: Date;
  onChange: (day: Date) => void;
}

const Days: FunctionComponent<Props> = (props) => {
  const { startDate, endDate, viewDate, onChange } = props;
  const [monthLabelId] = useUniqueIds(['month']);
  const weeks = useMemo(() => resolveWeeks(viewDate), [viewDate]);
  const providerValue = useMemo(() => ({
    startDate,
    endDate,
    onChange,
  }), [startDate, endDate, onChange]);

  return (
    <DayContext.Provider value={providerValue}>
      <StyledDays role="grid" aria-labelledby={monthLabelId}>
        <thead>
          <tr>
            <WeekDays />
          </tr>
        </thead>
        <tbody>
          <Weeks weeks={weeks} />
        </tbody>
      </StyledDays>
    </DayContext.Provider>
  );
};

export default React.memo(Days, arePropsEqual(['viewDate', 'startDate', 'endDate']));

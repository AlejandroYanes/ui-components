import React, { FunctionComponent, useContext } from 'react';
import { differenceInDays, startOfDay } from 'date-fns';
import { DayContext } from './utils';
import { StyledDay, StyledDayButton } from './styled/days';

interface Props {
  day: Date;
}

const Day: FunctionComponent<Props> = (props) => {
  const { day } = props;
  const { startDate, endDate, onChange } = useContext(DayContext);

  const selectDay = () => onChange(day);

  const normalizedStartDate = startOfDay(startDate);
  const normalizedEndDate = startOfDay(endDate);
  const normalizedDay = day ? startOfDay(day) : undefined;

  const isSelected = (
    normalizedDay &&
    (
      differenceInDays(normalizedDay, normalizedStartDate) === 0 ||
      (
        endDate &&
        differenceInDays(normalizedDay, normalizedEndDate) === 0
      )
    )
  );

  const isHighlighted = (
    normalizedDay &&
    normalizedEndDate &&
    (
      differenceInDays(normalizedDay, normalizedStartDate) > 0 &&
      differenceInDays(normalizedDay, normalizedEndDate) < 0
    )
  );

  const content = day ? day.getDate() : null;

  return (
    <StyledDay>
      <StyledDayButton
        isSelected={isSelected}
        isHighlighted={isHighlighted}
        disabled={!day}
        onClick={selectDay}
      >
        {content}
      </StyledDayButton>
    </StyledDay>
  );
};

export default Day;

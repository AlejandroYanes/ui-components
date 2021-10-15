import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  addMonths,
  differenceInDays,
  isEqual,
  setMonth,
  setYear,
  subMonths,
} from 'date-fns';
import RenderIf from 'components/base-components/RenderIf';
import { StyledCalendar } from './styled/calendar';
import Header from './Header';
import Days from './Days';
import Months from './Months';
import Years from './Years';
import { DateElement } from './types';

export interface Props {
  value: Date | Date[];
  onChange: (nextValue) => void;
  useRange?: boolean;
}

const Calendar: FunctionComponent<Props> = (props) => {
  const { value, onChange, useRange } = props;
  const startDate = useRange && value ? value[0] : value;
  const endDate = useRange && value ? value[1] : undefined;
  const [selectionMode, setSelectionMode] = useState<DateElement>(DateElement.Day);
  const [viewDate, setViewDate] = useState(startDate || new Date());

  useEffect(() => {
    if (!!startDate && !isEqual(startDate, viewDate)) {
      setViewDate(startDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  const changeSelection = () => {
    const nextSelectionMode = selectionMode === DateElement.Day
      ? DateElement.Month
      : DateElement.Year;
    setSelectionMode(nextSelectionMode);
  };

  const selectYear = (year: number) => {
    setViewDate(setYear(viewDate, year));
    setSelectionMode(DateElement.Month);
  };

  const selectMonth = (month: number) => {
    setViewDate(setMonth(viewDate, month));
    setSelectionMode(DateElement.Day);
  };

  const selectNextMonth = () => {
    setViewDate(addMonths(viewDate, 1));
  };

  const selectPreviousMonth = () => {
    setViewDate(subMonths(viewDate, 1));
  };

  const selectDay = (selectedDate: Date) => {
    if (!useRange) {
      onChange(selectedDate);
      return;
    }

    const differenceFromStart = differenceInDays(selectedDate, startDate);
    const isBeforeStartDate = differenceFromStart < 0;
    const isStartDate = differenceFromStart === 0;
    const isEndDate = differenceInDays(selectedDate, endDate) === 0;
    let nextValues = [startDate, selectedDate];

    if (!startDate || isBeforeStartDate) {
      nextValues = [selectedDate, endDate];
    }

    if (isStartDate || isEndDate) {
      nextValues = [selectedDate, undefined];
    }

    onChange(nextValues);
  };

  return (
    <StyledCalendar>
      <Header
        currentDate={viewDate}
        selecting={selectionMode}
        onChangeSelection={changeSelection}
        onSelectNext={selectNextMonth}
        onSelectPrevious={selectPreviousMonth}
      />
      <RenderIf condition={selectionMode === DateElement.Day}>
        <Days
          viewDate={viewDate}
          startDate={startDate}
          endDate={endDate}
          onChange={selectDay}
        />
      </RenderIf>
      <RenderIf condition={selectionMode === DateElement.Month}>
        <Months currentDate={viewDate} onChange={selectMonth} />
      </RenderIf>
      <RenderIf condition={selectionMode === DateElement.Year}>
        <Years currentDate={viewDate} onChange={selectYear} />
      </RenderIf>
    </StyledCalendar>
  );
};

export default Calendar;

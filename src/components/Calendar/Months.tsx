import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { capitalizeFirstLetter, getMonthName } from 'helpers';
import { useAppLocale } from 'components/Configuration';
import { months } from './types';
import { StyledList as StyledMonths, Item as Month } from './styled/months-years';

interface Props {
  currentDate: Date;
  onChange: (month: number) => void;
}

const Months: FunctionComponent<Props> = (props) => {
  const { currentDate, onChange } = props;
  const locale = useAppLocale();

  const handleMonthChange = useCallback((event) => {
    const { month } = event.target.dataset;
    onChange(parseInt(month));
  }, [onChange]);

  const monthButtons = useMemo(() => (
    months.map((m) => (
      <Month
        key={m.getTime()}
        label={capitalizeFirstLetter(getMonthName(m, locale))}
        data-month={m.getMonth()}
        isSelected={m.getMonth() === currentDate.getMonth()}
        onClick={handleMonthChange}
        variant="fill"
        color="background"
        mB
      />
    ))
  ), [currentDate, handleMonthChange]);

  return (
    <StyledMonths>
      {monthButtons}
    </StyledMonths>
  );
};

export default Months;

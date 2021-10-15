import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { resolveYearRange } from './utils';
import { StyledList as StyledYears, Item as Year } from './styled/months-years';

interface Props {
  currentDate: Date;
  onChange: (year: number) => void;
}

const Years: FunctionComponent<Props> = (props) => {
  const { currentDate, onChange } = props;

  const handleYearChange = useCallback((event) => {
    const { year } = event.target.dataset;
    onChange(parseInt(year));
  }, [onChange]);

  const yearButtons = useMemo(() => {
    const yearRange = resolveYearRange(currentDate);

    return yearRange.map((y) => (
      <Year
        key={y}
        label={y}
        data-year={y}
        isSelected={y === currentDate.getFullYear()}
        onClick={handleYearChange}
        variant="fill"
        color="background"
        mB
      />
    ));
  }, [currentDate, handleYearChange]);

  return (
    <StyledYears>
      {yearButtons}
    </StyledYears>
  );
};

export default Years;

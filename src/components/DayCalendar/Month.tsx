import React, { FunctionComponent } from 'react';
import { getMonthLabel } from 'helpers';
import { Month as StyledMonth } from './styled';

interface Props {
  day: Date;
}

function isMonthOutsideOfYear(day: Date) {
  return  day.getFullYear() !== new Date().getFullYear();
}

const Month: FunctionComponent<Props> = (props) => {
  const { day } = props;

  return (
    <StyledMonth small={isMonthOutsideOfYear(day)}>
      {getMonthLabel(day)}
    </StyledMonth>
  );
};

export default Month;

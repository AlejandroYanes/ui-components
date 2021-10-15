import React, { FunctionComponent, useMemo } from 'react';
import { StyledDateStamp } from './styled';

interface Props {
  value: Date;
}

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const DateStamp: FunctionComponent<Props> = (props) => {
  const { value } = props;
  const dateStamp = useMemo(() => value ? formatter.format(value) : undefined, [value]);

  return (
    <StyledDateStamp>{dateStamp}</StyledDateStamp>
  );
};

export default DateStamp;

import React, { FunctionComponent, useMemo } from 'react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { generateUID } from 'helpers';
import { Button } from 'components/Button';
import { Options as StyledOptions } from './styled';
import { CalendarIcon } from '../../../Icons';

const today = new Date();

const initialOptions = [
  {
    key: generateUID(),
    label: 'Today',
    value: [today],
    icon: <CalendarIcon />,
  },
  {
    key: generateUID(),
    label: 'Tomorrow',
    value: [addDays(today, 1)],
    icon: <CalendarIcon />,
  },
  {
    key: generateUID(),
    label: 'This Week',
    value: [startOfWeek(today), endOfWeek(today)],
    icon: <CalendarIcon />,
  },
  {
    key: generateUID(),
    label: 'Next Week',
    value: [startOfWeek(addDays(today, 7)), endOfWeek(addDays(today, 7))],
    icon: <CalendarIcon />,
  },
  {
    key: generateUID(),
    label: 'This Month',
    value: [startOfMonth(today), endOfMonth(today)],
    icon: <CalendarIcon />,
  },
  {
    key: generateUID(),
    label: 'Next Month',
    value: [startOfMonth(addMonths(today, 1)), endOfMonth(addMonths(today, 1))],
    icon: <CalendarIcon />,
  },
];

interface Props {
  onSelect: (date) => void;
}

const Options: FunctionComponent<Props> = (props) => {
  const { onSelect } = props;
  const options = useMemo(
    () => initialOptions.map(({ key, value, label, icon }) => (
      <Button
        key={key}
        onClick={() => onSelect(value)}
        label={label}
        leftIcon={icon}
        color="font"
        variant="flat"
        align="start"
        mB
      />
    )),
    [onSelect],
  );

  return (
    <StyledOptions>
      {options}
    </StyledOptions>
  );
};

export default Options;

import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { addDays, addHours } from 'date-fns';
import DateTimePickerComp from '../index';

const meta = {
  title: 'Example/Inputs/Date Time',
  component: DateTimePickerComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
      control: 'none',
    },
    value: {
      control: 'none',
    },
  },
} as Meta;

export const DateRange: ComponentStory<typeof DateTimePickerComp> = (args) => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 5)]);

  return (
    <DateTimePickerComp
      {...args}
      icon={null}
      type="date-range"
      value={value}
      onChange={setValue}
    />
  );
}

DateRange.args = {
  label: 'Range Date Picker',
  disabled: false,
  required: false,
};

export const TimeRange: ComponentStory<typeof DateTimePickerComp> = (args) => {
  const [value, setValue] = useState([new Date(), addHours(new Date(), 2)]);

  return (
    <DateTimePickerComp
      {...args}
      icon={null}
      type="time-range"
      value={value}
      onChange={setValue}
    />
  );
}

TimeRange.args = {
  label: 'Range Time Picker',
  disabled: false,
  required: false,
};

export default meta;

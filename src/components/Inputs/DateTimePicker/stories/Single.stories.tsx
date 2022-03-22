import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import DateTimePickerComp from '../index';

const meta = {
  title: 'Example/Inputs/Date Time',
  component: DateTimePickerComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['date', 'time', 'date-time'],
      },
    },
    value: {
      control: 'none',
    },
  },
} as Meta;

export const SingleDateTime: ComponentStory<typeof DateTimePickerComp> = (args) => {
  const [value, setValue] = useState(new Date());

  return (
    <DateTimePickerComp
      {...args}
      style={{ minWidth: '200px' }}
      value={value}
      onChange={setValue}
    />
  );
}

SingleDateTime.args = {
  label: 'Single Date Picker',
  type: 'date',
  disabled: false,
  required: false,
};

export default meta;

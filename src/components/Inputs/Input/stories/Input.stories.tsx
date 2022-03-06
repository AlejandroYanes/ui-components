import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import InputComp from '../';

const meta = {
  title: 'Example/Inputs/Input',
  component: InputComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    value: {
      control: 'none',
    },
  },
} as Meta;

export const Input: ComponentStory<typeof InputComp> = (args) => {
  const [value, setValue] = useState('');

  return (
    <InputComp {...args} value={value} onChange={setValue} />
  );
}

Input.args = {
  label: 'Test Input',
  disabled: false,
  required: false,
};

export default meta;

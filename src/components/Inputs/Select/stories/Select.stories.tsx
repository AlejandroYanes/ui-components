import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import InputComp, { SelectOption } from '../';

const meta = {
  title: 'Example/Inputs/Select',
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

const items: SelectOption[] = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
];

export const Select: ComponentStory<typeof InputComp> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <InputComp
      {...args}
      options={items}
      value={value}
      onChange={setValue}
      style={{ width: '220px' }}
    />
  );
}

Select.args = {
  label: 'Test Select',
  disabled: false,
  required: false,
};

export default meta;

import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import SelectComp, { NativeSelectOption } from '../';

const meta = {
  title: 'Example/Inputs/Native Select',
  component: SelectComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    value: {
      control: 'none',
    },
  },
} as Meta;

const items: NativeSelectOption[] = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
];

export const NativeSelect: ComponentStory<typeof SelectComp> = (args) => {
  const [value, setValue] = useState(1);

  return (
    <SelectComp
      {...args}
      options={items}
      value={value}
      onChange={setValue}
      style={{ width: '220px' }}
    />
  );
}

NativeSelect.args = {
  label: 'Native Select',
  disabled: false,
  required: false,
};

export default meta;

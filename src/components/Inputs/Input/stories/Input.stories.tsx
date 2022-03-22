import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import FlexBox from 'components/FlexBox';
import { UserIcon } from 'components/Icons';
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
  const [value, setValue] = useState('initial value');

  return (
    <FlexBox direction="column" align="stretch">
      <InputComp {...args} value={value} onChange={setValue} mB />
      <InputComp
        {...args}
        value={value}
        onChange={setValue}
        icon={<UserIcon height="1em" width="1em" />}
      />
    </FlexBox>
  );
}

Input.args = {
  label: 'Test Input',
  disabled: false,
  required: false,
  showClear: true,
};

export default meta;

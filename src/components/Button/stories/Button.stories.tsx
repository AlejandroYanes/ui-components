import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button as ButtonComp } from 'components/Button';

const meta = {
  title: 'Example/Button/Button',
  component: ButtonComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: {
      control: 'none',
    },
  },
} as Meta;

export const Button: ComponentStory<typeof ButtonComp> = (args) => (
  <ButtonComp {...args} />
);

Button.args = {
  label: 'Test Button',
  variant: 'fill',
  color: 'brand',
  type: 'button',
};

export default meta;

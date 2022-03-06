import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { IconButton as IconButtonComp } from 'components/Button';

const meta = {
  title: 'Example/Button',
  component: IconButtonComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: {
      control: 'none',
    },
  },
} as Meta;

export const IconButton: ComponentStory<typeof IconButtonComp> = (args) => (
  <IconButtonComp {...args} />
);

IconButton.args = {
  color: 'brand',
  variant: 'fill',
  icon: 'BELL',
};

export default meta;

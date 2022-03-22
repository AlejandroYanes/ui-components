import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import AvatarComp from 'components/Avatar';

const meta: Meta = {
  title: 'Example/Avatar',
  component: AvatarComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    size: {
      control: 'radio',
    },
  },
};

export const Avatar: ComponentStory<typeof AvatarComp> = (args) => (
  <AvatarComp src="user1" {...args} />
);

export default meta;

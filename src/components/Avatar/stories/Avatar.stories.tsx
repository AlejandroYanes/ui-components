import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Avatar from 'components/Avatar';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
} as Meta;

export const SvgUser: ComponentStory<typeof Avatar> = (args) => (
  <Avatar src="user1" {...args} />
);

export default meta;
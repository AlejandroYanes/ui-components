import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import AvatarGroup from '../index';

const meta: Meta = {
  title: 'Example/AvatarGroup',
  component: AvatarGroup,
};

export const Large: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup icons={['user1', 'user3', 'user4', 'user2']} size="large" {...args} />
);

export const Medium: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup icons={['user1', 'user3', 'user4', 'user2']} size="medium" {...args} />
);

export const Small: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup icons={['user1', 'user3', 'user4', 'user2']} size="small" {...args} />
);

export default meta;

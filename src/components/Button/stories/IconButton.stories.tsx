import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { IconButton } from 'components/Button';

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
} as Meta;

export const Fill: ComponentStory<typeof IconButton> = (args) => (
  <IconButton variant="fill" color="brand" icon="HEART_FILLED" {...args} />
);

export const Outline: ComponentStory<typeof IconButton> = (args) => (
  <IconButton variant="outline" color="info" icon="SEARCH" size="x-large" {...args} />
);

export const Flat: ComponentStory<typeof IconButton> = (args) => (
  <IconButton variant="flat" color="success" icon="BOOKMARK" size="large" {...args} />
);

export const Text: ComponentStory<typeof IconButton> = (args) => (
  <IconButton variant="text" color="info" icon="BELL" {...args} />
);

export default meta;

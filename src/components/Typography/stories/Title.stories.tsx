import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Title from '../Title';

const meta = {
  title: 'Example/Typography/Title',
  component: Title,
} as Meta;

export const Level1: ComponentStory<typeof Title> = (args) => (
  <Title level={1} color="brand" weight="bold" {...args}>H1 Header</Title>
);

export const Level2: ComponentStory<typeof Title> = (args) => (
  <Title level={2} color="accent" weight="light" {...args}>H2 Header</Title>
);

export const Level3: ComponentStory<typeof Title> = (args) => (
  <Title level={3} {...args}>H3 Header</Title>
);

export default meta;

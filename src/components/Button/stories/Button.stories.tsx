import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
} as Meta;

export const Fill: ComponentStory<typeof Button> = (args) => (
  <Button variant="fill" color="warning" label="Brand Button" {...args} />
);

export const Outline: ComponentStory<typeof Button> = (args) => (
  <Button variant="outline" color="accent" label="Outline Button" {...args} />
);

export const Flat: ComponentStory<typeof Button> = (args) => (
  <Button variant="flat" color="success" label="Flat Button" {...args} />
);

export const Text: ComponentStory<typeof Button> = (args) => (
  <Button variant="text" color="info" label="Text Button" {...args} />
);

export default meta;

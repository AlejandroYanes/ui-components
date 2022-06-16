import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Text from '../Text';

const meta = {
  title: 'Example/Typography/Text',
  component: Text,
} as Meta;

export const Brand: ComponentStory<typeof Text> = (args) => (
  <Text color="brand" {...args}>Normal Text</Text>
);

export const Large: ComponentStory<typeof Text> = (args) => (
  <Text color="accent" weight="light" size="large" {...args}>Large test</Text>
);

export const Font: ComponentStory<typeof Text> = (args) => (
  <Text color="font" size="small" {...args}>Small text</Text>
);

export const Secondary: ComponentStory<typeof Text> = (args) => (
  <Text color="secondary" {...args}>Secondary Text</Text>
);

export default meta;

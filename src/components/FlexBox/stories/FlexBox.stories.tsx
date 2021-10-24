import { Meta, ComponentStory } from '@storybook/react';
import Badge from 'components/Badge';
import FlexBox from '../index';

const meta: Meta = {
  title: 'Example/FlexBox',
  component: FlexBox,
};

export const Row: ComponentStory<typeof FlexBox> = (args) => (
  <FlexBox direction="row" align="flex-start" justify="flex-start" {...args}>
    <Badge color="brand" label="Item 1" mR />
    <Badge color="accent" label="Item 2" mR />
    <Badge color="info" label="Item 3" />
  </FlexBox>
);

export const Column: ComponentStory<typeof FlexBox> = (args) => (
  <FlexBox direction="column" align="stretch" justify="flex-start" {...args}>
    <Badge color="success" label="Item 1" mB />
    <Badge color="warning" label="Item 2" mB />
    <Badge color="error" label="Item 3" />
  </FlexBox>
);

export default meta;

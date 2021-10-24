import { Meta, ComponentStory } from '@storybook/react';
import Badge from '../index';

const meta: Meta = {
  title: 'Example/Badge',
  component: Badge,
};

export const Normal: ComponentStory<typeof Badge> = (args) => (
  <Badge color="brand" icon="HEART_FILLED" label="You like this" {...args} />
);

export const Small: ComponentStory<typeof Badge> = (args) => (
  <Badge color="accent" icon="STAR" label="You like this" sm {...args} />
);

export const ButtonStyle: ComponentStory<typeof Badge> = (args) => (
  <Badge color="info" label="Like" asButton {...args} />
);

export default meta;

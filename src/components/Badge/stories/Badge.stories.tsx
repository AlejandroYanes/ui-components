import { Meta, ComponentStory } from '@storybook/react';
import Badge from '../index';
import { HeartFilledIcon, StarIcon } from '../../Icons';

const meta: Meta = {
  title: 'Example/Badge',
  component: Badge,
};

export const Normal: ComponentStory<typeof Badge> = (args) => (
  <Badge color="brand" icon={<HeartFilledIcon />} label="You like this" {...args} />
);

export const Small: ComponentStory<typeof Badge> = (args) => (
  <Badge
    color="accent"
    icon={<StarIcon width="1.5em" height="1.5em" />}
    label="You like this"
    sm
    {...args}
  />
);

export const ButtonStyle: ComponentStory<typeof Badge> = (args) => (
  <Badge color="info" label="Like" asButton {...args} />
);

export default meta;

import { ComponentStory, Meta } from '@storybook/react';
import { Button as ButtonComp } from 'components/Button';
import { HeartIcon } from 'components/Icons';

const meta = {
  title: 'Example/Button',
  component: ButtonComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onClick: {
      control: 'none',
    },
  },
} as Meta;

export const Button: ComponentStory<typeof ButtonComp> = (args) => (
  <ButtonComp {...args} leftIcon={<HeartIcon />} />
);

Button.args = {
  label: 'Test Button',
  variant: 'fill',
  color: 'font',
  type: 'button',
};

export default meta;

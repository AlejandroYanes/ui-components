import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, Meta } from '@storybook/react';
import { LinkButton as ButtonComp } from 'components/Button';

const meta = {
  title: 'Example/Button/LinkButton',
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

export const LinkButton: ComponentStory<typeof ButtonComp> = (args) => (
  <BrowserRouter>
    <ButtonComp {...args} />
  </BrowserRouter>
);

LinkButton.args = {
  label: 'Link Button',
  variant: 'fill',
  color: 'brand',
};

export default meta;

import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
} as Meta;

export const Brand: ComponentStory<typeof Button> = (args) => (
  <Button variant="fill" color="brand" label="Button" {...args} />
);

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

export default meta;

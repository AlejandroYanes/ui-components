import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { PickList, PickItem } from 'components/PickList';
import SvgIcon, { Icons } from 'components/SvgIcon';
import { icons } from 'components/SvgIcon/Icons';
import { Text } from '../../Typography';

const meta = {
  title: 'Example/Icons',
  component: SvgIcon,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const iconList = Object.keys(icons);

export const Button: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <PickList cols={4}>
      {iconList.map(icon => (
        <PickItem key={icon} value={icon} color="brand">
          <SvgIcon {...args} icon={icon as Icons} color="BRAND" size="page" />
          <Text size="medium" color="brand" ellipsis margin="8px">{icon}</Text>
        </PickItem>
      ))}
    </PickList>
  );
}


export default meta;

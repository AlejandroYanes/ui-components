import { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { PickList as PickListComp, PickItem } from 'components/PickList';
import { FireIcon } from '../../Icons';
import { Text } from '../../Typography';

const meta = {
  title: 'Example/Pick List',
  component: PickListComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    value: {
      control: 'none',
    },
  },
} as Meta;

export const Basic: ComponentStory<typeof PickListComp> = (args) => {
  const [value, setValue] = useState('1');

  return (
    <PickListComp {...args} value={value} onChange={setValue}>
      <PickItem value="1">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 1</Text>
      </PickItem>
      <PickItem value="2">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 2</Text>
      </PickItem>
      <PickItem value="3">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 3</Text>
      </PickItem>
      <PickItem value="4">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 4</Text>
      </PickItem>
      <PickItem value="5">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 5</Text>
      </PickItem>
      <PickItem value="6">
        <FireIcon width={48} height={48} color="FONT" />
        <Text size="large">Item 6</Text>
      </PickItem>
    </PickListComp>
  );
}

Basic.args = {
  color: 'brand',
  cols: 3,
  layout: 'grid',
};

export default meta;

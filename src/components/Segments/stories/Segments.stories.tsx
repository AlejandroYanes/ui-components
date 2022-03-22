import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Segment, Segments as SegmentsComp } from '..';
import { FireIcon } from 'components/Icons';

const meta: Meta = {
  title: 'Example/Segments',
  component: SegmentsComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
  },
};

export const Segments: ComponentStory<typeof SegmentsComp> = (args) => {
  const [value, setValue] = useState('option-1');

  return (
    <SegmentsComp {...args} value={value} onChange={setValue}>
      <Segment value="option-1" label="Option 1" />
      <Segment value="option-2" label="Option 2" icon={<FireIcon />} />
      <Segment value="option-3" label="Option 3" />
    </SegmentsComp>
  );
};

export default meta;

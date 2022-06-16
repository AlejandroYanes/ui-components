import { useState } from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { addDays } from 'date-fns';
import FlexBox from 'components/FlexBox';
import Calendar from '../index';

const meta: Meta = {
  title: 'Example/Calendar',
  component: Calendar,
};

export const Single: ComponentStory<typeof Calendar> = () => {
  const [today, setToday] = useState(new Date());

  return (
    <FlexBox direction="column" align="stretch" width={380}>
      <Calendar value={today} onChange={setToday} />
    </FlexBox>
  );
}

export const Range: ComponentStory<typeof Calendar> = () => {
  const [range, setRange] = useState([new Date(), addDays(new Date(), 20)]);
  return (
    <FlexBox direction="column" align="stretch" width={380}>
      <Calendar value={range} onChange={setRange} useRange />
    </FlexBox>
  );
}

export default meta;

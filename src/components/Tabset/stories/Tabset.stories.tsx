import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Tab, Tabset as TabsetComponent } from '../';
import AddBookmarkIcon from '../../Icons/AddBookmark';
import { BookIcon, GlassMartiniIcon } from '../../Icons';

const meta = {
  title: 'Example/Tabset',
  component: TabsetComponent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    activeTab: {
      table: {
        disable: true,
      },
    },
    onTabChange: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Tabset: ComponentStory<typeof TabsetComponent> = (args) => {
  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <TabsetComponent {...args} activeTab={activeTab} onTabChange={setActiveTab}>
      <Tab name="tab-1" label="Tab 1" icon={<AddBookmarkIcon />} />
      <Tab name="tab-2" label="Tab 2" icon={<GlassMartiniIcon />} />
      <Tab name="tab-3" label="Tab 3" icon={<BookIcon />} />
    </TabsetComponent>
  );
};

Tabset.args = {
  direction: 'horizontal',
  bordered: false,
  fullWidth: true,
};

export default meta;

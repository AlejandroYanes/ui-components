import React, { FunctionComponent, ReactNode, } from 'react';

export interface TabsProps {
  name: string;
  icon?: ReactNode;
  label?: string;
  onClick?: (activeTab: string) => void;
}

const Tab: FunctionComponent<TabsProps> = () => <></>;

Tab.defaultProps = {
  icon: null,
  label: '',
};

export default Tab;

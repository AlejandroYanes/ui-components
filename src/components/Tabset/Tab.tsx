import React, { FunctionComponent, ReactNode, } from 'react';
import { Icons } from '../Icons';

export interface TabsProps {
  name: string;
  icon?: Icons | ReactNode;
  label?: string;
  onClick?: (activeTab: string) => void;
}

const Tab: FunctionComponent<TabsProps> = () => <></>;

Tab.defaultProps = {
  icon: null,
  label: '',
};

export default Tab;

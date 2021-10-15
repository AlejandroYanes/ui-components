import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { TabSetProvider } from './context';
import HrzTabset from './HorizontalTabs';
import VertTabset from './VerticalTabs';

interface TabsetProps extends PositionProps {
  activeTab: string;
  onTabChange?: (activeTab) => void;
  bordered?: boolean;
  direction?: 'horizontal' | 'vertical';
}

const directionMap = {
  'horizontal': HrzTabset,
  'vertical': VertTabset,
};

const Tabset: FunctionComponent<TabsetProps> = (props) => {
  const {
    activeTab,
    onTabChange,
    direction,
    fullWidth,
    children,
    ...rest
  } = props;
  const Container = directionMap[direction];
  const tabs = React.Children.map(children, (child: any) => child.props);

  return (
    <AnimateSharedLayout type="crossfade">
      <TabSetProvider
        activeTab={activeTab}
        onTabChange={onTabChange}
        fullWidth={fullWidth}
      >
        <Container fullWidth={fullWidth} tabs={tabs} {...rest} />
      </TabSetProvider>
    </AnimateSharedLayout>
  );
};

Tabset.defaultProps = {
  direction: 'horizontal',
};

export default Tabset;

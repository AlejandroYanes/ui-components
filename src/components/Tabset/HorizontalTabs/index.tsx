import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { TabsProps } from '../Tab';
import Item from './Item';
import { List, StyledTabset } from './styled';

interface TabsetProps extends PositionProps {
  bordered?: boolean;
  tabs: TabsProps[];
}

const HrzTabset: FunctionComponent<TabsetProps> = (props) => {
  const { tabs, bordered, fullWidth, ...rest } = props;
  const tabsItems = tabs.map(tab => <Item key={tab.name} {...tab} />);

  return (
    <StyledTabset bordered={bordered} fullWidth={fullWidth} {...rest}>
      <List>
        {tabsItems}
      </List>
    </StyledTabset>
  );
};

export default HrzTabset;

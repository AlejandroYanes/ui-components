import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { TabsProps } from '../Tab';
import Item from './Item';
import { StyledTabset } from './styled';

interface TabsetProps extends PositionProps {
  bordered?: boolean;
  tabs: TabsProps[];
}

const VertTabset: FunctionComponent<TabsetProps> = (props) => {
  const { tabs, bordered, ...rest } = props;
  const tabsItems = tabs.map(tab => <Item key={tab.name} {...tab} />);

  return (
    <StyledTabset bordered={bordered} {...rest}>
      {tabsItems}
    </StyledTabset>
  );
};

export default VertTabset;

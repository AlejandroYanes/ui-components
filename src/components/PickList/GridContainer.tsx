import { FunctionComponent } from 'react';
import { Wrapper } from './styled/grid-container';
import { PickListProps } from './PickList';

const GridContainer: FunctionComponent<PickListProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
};

export default GridContainer;

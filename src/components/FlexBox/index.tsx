import React, { forwardRef, FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledFlexBox } from './styled/flex-box';

interface Props extends PositionProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justify?: (
    'flex-start' |
    'flex-end' |
    'center' |
    'stretch' |
    'space-between' |
    'space-around'
    );
  width?: number | string;
  height?: number | string;
  wrap?: boolean;
  grow?: boolean;
  flex?: string;
  as?: string;
  ref?: any;
}

const FlexBox: FunctionComponent<Props> = forwardRef((props, ref) => {
  const { children, as, ...rest } = props;

  return (
    <StyledFlexBox as={as as any} ref={ref} {...rest}>
      {children}
    </StyledFlexBox>
  );
});

FlexBox.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
  width: '',
  height: '',
  as: 'div',
};

export default FlexBox;

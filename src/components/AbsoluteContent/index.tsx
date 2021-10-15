import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledAbsolute } from './styled';

interface Props extends PositionProps {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  height?: string | number;
  width?: string | number;
}

const AbsoluteContent: FunctionComponent<Props> = (props) => {
  const { children, ...styleProps } = props;

  return (
    <StyledAbsolute {...styleProps}>
      {children}
    </StyledAbsolute>
  );
};

AbsoluteContent.defaultProps = {
  top: '',
  right: '',
  bottom: '',
  left: '',
  width: '',
  height: '',
};

export default AbsoluteContent;

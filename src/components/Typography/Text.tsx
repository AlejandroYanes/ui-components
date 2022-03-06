import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Text as StyledText } from './styled/text';

interface Props extends PositionProps {
  weight?: 'light' | 'normal' | 'bold';
  size?: 'small' | 'medium' | 'large';
  // eslint-disable-next-line max-len
  color?: 'brand' | 'accent' | 'warning' | 'error' | 'font' | 'secondary' | 'white' | 'background' | 'black' | 'current';
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  as?: string;
}

const Text: FunctionComponent<Props> = (props) => {
  const { children, as, ...rest } = props;

  return (
    <StyledText as={as as any} {...rest}>{children}</StyledText>
  );
};

Text.defaultProps = {
  color: 'font',
  weight: 'normal',
  size: 'medium',
  as: 'span'
};

export default Text;

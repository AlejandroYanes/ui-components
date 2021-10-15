import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Paragraph as StyledParagraph } from './styled/paragraph';

interface Props extends PositionProps {
  size?: 'small' | 'medium' | 'large';
}

const Paragraph: FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledParagraph {...rest}>{children}</StyledParagraph>
  );
};

Paragraph.defaultProps = {
  size: 'medium',
};

export default Paragraph;

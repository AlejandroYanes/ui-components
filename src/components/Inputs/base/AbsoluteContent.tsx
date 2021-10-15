import React, { FunctionComponent } from 'react';
import { AbsoluteContent as StyledAbsoluteContent } from './styled/absolute-content';

interface Props {
  topSpaced?: boolean;
  floatRight?: boolean;
  style?: any;
}

const AbsoluteContent: FunctionComponent<Props> = (props) => {
  const { topSpaced, floatRight, style, children } = props;

  return (
    <StyledAbsoluteContent
      topSpaced={topSpaced}
      floatRight={floatRight}
      style={style}
      data-el="absolute-content"
    >
      {children}
    </StyledAbsoluteContent>
  );
};

export default AbsoluteContent;

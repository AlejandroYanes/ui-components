import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Wrapper } from './styled/circled-dot';

interface Props extends PositionProps {
  flat?: boolean;
  size: 'x-small' | 'small' | 'medium' | 'large';
}

const CircledDot: FunctionComponent<Props> = (props) => {
  return (
    <Wrapper {...props}>
      <div />
      <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32" />
      </svg>
    </Wrapper>
  );
};

CircledDot.defaultProps = {
  size: 'medium'
};

export default CircledDot;

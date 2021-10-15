import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/Configuration';
import { Wrapper, Dot } from './styled/horizontal-dots';

interface Props extends PositionProps {
  flat?: boolean;
  size?: 'x-small' | 'small' | 'medium' | 'large';
}

const HorizontalDots: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { size, flat, ...rest } = props;

  return (
    <Wrapper size={size} {...rest}>
      <Dot size={size} color={flat ? Colors.WHITE : Colors.BRAND} />
      <Dot size={size} color={flat ? Colors.WHITE : Colors.ACCENT} />
      <Dot size={size} color={flat ? Colors.WHITE : Colors.INFO} />
      <Dot size={size} color={flat ? Colors.WHITE : Colors.ERROR} />
    </Wrapper>
  );
};

HorizontalDots.defaultProps = {
  size: 'medium',
};

export default HorizontalDots;


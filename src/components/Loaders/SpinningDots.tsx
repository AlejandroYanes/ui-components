import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Colors } from 'styles/colors';
import { useAppColors } from 'components/base-components/Configuration';
import { Wrapper, Dot } from './styled/spinning-dots';

interface Props extends PositionProps {
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'page';
  color?: Colors;
  delay?: number;
}

const SpinningDots: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { color, ...rest } = props;

  return (
    <Wrapper data-el="loader-spinning-dots" {...rest}>
      <Dot color={color ? Colors[color] : Colors.INFO} />
      <Dot color={color ? Colors[color] : Colors.SUCCESS} />
      <Dot color={color ? Colors[color] : Colors.WARNING} />
      <Dot color={color ? Colors[color] : Colors.ERROR} />
    </Wrapper>
  );
};

SpinningDots.defaultProps = {
  size: 'medium',
  delay: 0,
};

export default SpinningDots;

import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/base-components/Configuration';
import { Wrapper, Circle } from './styled/concentric';

interface Props extends PositionProps {
  size: 'small' | 'medium' | 'large' | 'page';
  color?: string;
}

const Concentric: FunctionComponent<Props> = (props) => {
  const { color, ...rest } = props;
  const Colors = useAppColors();

  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 340"
      strokeLinecap="round"
      {...rest}
    >
      <Circle cx="170" cy="170" r="160" stroke={color || Colors.BRAND} />
      <Circle cx="170" cy="170" r="135" stroke={color || Colors.ACCENT} />
      <Circle cx="170" cy="170" r="110" stroke={color || Colors.SUCCESS} />
      <Circle cx="170" cy="170" r="85" stroke={color || Colors.ERROR} />
    </Wrapper>
  );
};

Concentric.defaultProps = {
  size: 'medium',
};

export default Concentric;

import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { StyledIconButton } from './styled';

interface Props extends PositionProps {
  icon: Icons;
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  color?: (
    'brand' |
    'accent' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'font' |
    'background'
  );
  size?: 'small' | 'medium' | 'large' | 'x-large';
  onClick: (event) => void;
  toggle?: boolean;
  disabled?: boolean;
}

const IconButton: FunctionComponent<Props> = (props) => {
  const {
    onClick,
    icon,
    color,
    size,
    ...rest
  } = props;

  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      color={color}
      size={size}
      {...rest}
    >
      <SvgIcon icon={icon} size={size} />
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: 'flat',
  color: 'background',
  size: 'medium',
};

export default IconButton;

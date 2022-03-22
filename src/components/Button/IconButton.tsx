import React, { FunctionComponent, ReactNode } from 'react';
import { StyledIconButton } from './styled';
import { CommonButtonProps, IconButtonSize } from './types';

interface Props extends CommonButtonProps {
  icon: ReactNode;
  size?: IconButtonSize;
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
      {icon}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: 'flat',
  color: 'background',
  size: 'medium',
};

export default IconButton;

import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Icons } from 'components/SvgIcon';
import Content from './Content';
import { Button as StyledButton } from './styled';

export interface ButtonProps extends PositionProps {
  id?: string;
  label?: string;
  onClick: (event) => void;
  leftIcon?: Icons;
  rightIcon?: Icons;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'background';
  align?: 'start' | 'center' | 'end';
  loading?: boolean;
  disabled?: boolean;
  sm?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    label,
    onClick,
    leftIcon,
    rightIcon,
    loading,
    disabled,
    variant,
    color,
    sm,
    ...rest
  } = props;

  const handleOnClick = (event) => {
    if (!loading && !disabled) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      onClick={handleOnClick}
      disabled={disabled}
      variant={variant}
      color={color}
      sm={sm}
      {...rest}
    >
      <Content
        sm={sm}
        label={label}
        color={color}
        variant={variant}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'flat',
  color: 'brand',
  align: 'center',
  className: undefined,
  style: undefined,
  leftIcon: null,
  rightIcon: null,
  loading: false,
};

export default Button;

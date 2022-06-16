import React, { FunctionComponent, ReactNode } from 'react';
import Content from './Content';
import { Button as StyledButton } from './styled';
import { CommonButtonProps } from './types';

export interface ButtonProps extends CommonButtonProps {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  align?: 'start' | 'center' | 'end';
  loading?: boolean;
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
    children,
    ...rest
  } = props;

  const handleOnClick = (event) => {
    if (!loading && !disabled) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      data-testid="button"
      onClick={handleOnClick}
      disabled={disabled}
      variant={variant}
      color={color}
      sm={sm}
      {...rest}
    >
      <Content
        label={label}
        color={color}
        variant={variant}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </Content>
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

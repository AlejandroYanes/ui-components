import styled from 'styled-components';
import { elementHeight } from 'styles/variables';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { ButtonProps } from '../Button';
import { getVariantStyles } from './utils';

const getSize = (props: ButtonProps) => {
  const { variant, sm, fullWidth } = props;
  const width = fullWidth ? '100%' : undefined;

  if (variant === 'text') {
    return `
      font-size: 16px;
    `;
  }

  if (sm) {
    return `
      height: 28px;
      width: ${width};
      min-width: 28px;
      font-size: 13px;
      padding: 0 8px;
    `;
  }

  return `
    width: ${width};
    min-width: ${elementHeight};
    height: ${elementHeight};
    font-size: 16px;
  `;
};

const getAlignment = (props: ButtonProps) => {
  const { align } = props;
  const alignment = align === 'center' ? align : `flex-${align}`;
  return `justify-content: ${alignment}`;
};

export const Button = styled.button.attrs(anyPropsAttrs)`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: all linear 100ms;
  ${getSize};
  ${getAlignment};
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.98);
  }

  & > svg * {
    transition: all linear 100ms;
  }
`;

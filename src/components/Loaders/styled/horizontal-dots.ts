import styled, { keyframes } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const wrapperSizeMap = {
  'x-small': 'height: 12px; width: 56px',
  small: 'height: 16px; width: 64px',
  medium: 'height: 24px; width: 84px',
  large: 'height: 32px; width: 124px',
};

export const Wrapper = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ size }) => wrapperSizeMap[size]};
  ${getPositionStyles};
`;

const dotSizeMap = {
  'x-small': 'height: 8px; width: 8px',
  small: 'height: 12px; width: 12px',
  medium: 'height: 16px; width: 16px',
  large: 'height: 24px; width: 24px',
};

const bounce = keyframes`
  0%, 100% { transform: translateY(0%) }
  25% { transform: translateY(50%) }
  75% { transform: translateY(-50%) }
`;

export const Dot = styled.div.attrs(anyPropsAttrs)`
  ${({ size }) => dotSizeMap[size]};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  transition: all;
  animation: ${bounce} 1s linear infinite;

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    animation-delay: 1s;
  }
`;

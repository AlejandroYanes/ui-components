import styled, { keyframes } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const sizeMap = {
  small: 'height: 20px; width: 20px',
  medium: 'height: 32px; width: 32px',
  large: 'height: 48px; width: 48px',
  page: 'height: 340px; width: 340px',
};

export const Wrapper = styled.svg.attrs(anyPropsAttrs)`
  ${({ size }) => sizeMap[size]};
  ${getPositionStyles};
`;

const preloader = keyframes`
  50% {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.circle`
  fill: none;
  stroke-width: 8;
  animation-name: ${preloader};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 170px 170px;
  will-change: transform;

  &:nth-of-type(1) {
    stroke-dasharray: 550px;
    animation-delay: -0.15s;
  }
  &:nth-of-type(2) {
    stroke-dasharray: 500px;
    animation-delay: -0.3s;
  }
  &:nth-of-type(3) {
    stroke-dasharray: 450px;
    animation-delay: -0.45s;
  }
  &:nth-of-type(4) {
    stroke-dasharray: 300px;
    animation-delay: -0.6s;
  }
`;

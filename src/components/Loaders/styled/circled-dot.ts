import styled, { keyframes } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const circleAnimation = keyframes`
  25% {
    stroke-dashoffset: 125;
  }
  50% {
    stroke-dashoffset: 175;
  }
  75% {
    stroke-dashoffset: 225;
  }
  100% {
    stroke-dashoffset: 275;
  }
`;

const dotAnimation = keyframes`
  25% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(54px, -54px);
  }
  75% {
    transform: translate(0, -108px);
  }
  100% {
    transform: translate(-54px, -54px);
  }
`;

// const sizeMap = {
//   'x-small': {
//     wrapper: 'height: 20px; width: 20px;',
//     dot: 'width: 4px; height: 4px; top: 8px; left: 2px',
//   },
//   small: {
//     wrapper: 'height: 44px; width: 44px;',
//     dot: 'width: 8px; height: 8px; top: 18px; left: 2px;',
//   },
// };

export const Wrapper = styled.div.attrs(anyPropsAttrs)`
  width: 132px;
  height: 132px;
  position: relative;
  ${getPositionStyles};

  & div {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    top: 111px;
    left: 57px;
    transform: translate(-54px, -54px);
    display: block;
    background: ${({ theme }) => theme.colors.BRAND};
    animation: ${dotAnimation} 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  & svg {
    display: block;
    width: 100%;
    height: 100%;

    & circle {
      fill: none;
      stroke: ${({ theme }) => theme.colors.ACCENT};
      stroke-width: 10px;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke-dasharray: 150 50 150 50;
      stroke-dashoffset: 75;
      animation: ${circleAnimation} 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
  }
`;

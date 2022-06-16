import styled, { keyframes } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const sizeMap = {
  'x-small': 'width: 16px; height: 16px',
  small: 'width: 20px; height: 20px',
  medium: 'width: 48px; height: 48px',
  large: 'width: 60px; height: 60px',
  page: 'width: 100px; height: 100px',
};

const dotsSizeMap = {
  'x-small': 'width: 6px; height: 6px',
  small: 'width: 8px; height: 8px',
  medium: 'width: 16px; height: 16px',
  large: 'width: 24px; height: 24px',
  page: 'width: 48px; height: 48px',
}

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  90%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Wrapper = styled.div.attrs(anyPropsAttrs)`
  position: relative;
  box-sizing: content-box;
  ${getPositionStyles};
  ${({ size }) => sizeMap[size]};
  animation: ${fadeIn} ${({ delay }) => delay}ms linear;

  & div:first-child {
    animation-delay:-2s;
    ${({ size }) => dotsSizeMap[size]};
  }
  & div:nth-child(2) {
    animation-delay:-1.5s;
    ${({ size }) => dotsSizeMap[size]};
  }
  & div:nth-child(3) {
    animation-delay:-1s;
    ${({ size }) => dotsSizeMap[size]};
  }
  & div:nth-child(4) {
    animation-delay:-0.5s;
    ${({ size }) => dotsSizeMap[size]};
  }
`;

const spin = keyframes`
  0%,100%{transform:translate(0)}
  25%{transform:translate(160%)}
  50%{transform:translate(160%, 160%)}
  75%{transform:translate(0, 160%)}
`;

export const Dot = styled.div.attrs(anyPropsAttrs)`
  border:0;
  margin:0;
  width:40%;
  height:40%;
  position:absolute;
  border-radius:50%;
  background-color: ${({ color }) => color};
  animation: ${spin} 2s ease infinite;
`;

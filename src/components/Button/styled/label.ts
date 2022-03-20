import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const Text = styled.span.attrs(anyPropsAttrs)`
  font-weight: 700;
  letter-spacing: 0.2px;
  padding: 0 8px;
  opacity: ${({ show }) => show ? 1 : 0};
  pointer-events: none;
  transition: all 150ms linear;
`;

export const IconWrapper = styled.span`
  opacity: ${({ show }) => show ? 1 : 0};
`;

export const LoadingLayer = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({ show }) => show ? 1 : -1};
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 150ms linear;
`;

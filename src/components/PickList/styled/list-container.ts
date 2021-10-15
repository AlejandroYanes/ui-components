import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  ${getPositionStyles};
`;

export const StyledListContainer = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Edge = styled.div.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  height: 60px;
  display: flex;
  padding: 0 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

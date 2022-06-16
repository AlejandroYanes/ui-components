import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const getBorderStyles = ({ bordered, theme }) => (
  bordered
    ? `border-bottom: 2px solid ${theme.colors.FONT_SHADE};`
    : ''
);

const getScrollStyles = ({ fullWidth }) => (
  !fullWidth
    ? `
      max-width: 100%;
      overflow: auto visible;
      scroll-behavior: smooth;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    `
    : `
      width: 100%;
    `
);

export const StyledTabset = styled.div.attrs(anyPropsAttrs)`
  height: 48px;
  box-sizing: content-box;
  ${getBorderStyles};
   ${getScrollStyles};
  ${getPositionStyles};
`;

export const List = styled.ul.attrs(anyPropsAttrs)`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 48px;
  box-sizing: border-box;
  background-color: transparent;
`;

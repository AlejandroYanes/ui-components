import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const getBorderStyles = ({ bordered, theme }) => (
  bordered
    ? `border-right: 2px solid ${theme.colors.FONT_SHADE};`
    : ''
);

const getWidthStyles = ({ fullWidth }) => (
  fullWidth ? 'width: 100%;' : ''
);

export const StyledTabset = styled.ul.attrs(anyPropsAttrs)`
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  ${getWidthStyles};
  ${getBorderStyles};
  ${getPositionStyles};
`;


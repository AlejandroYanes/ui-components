import styled, { css } from 'styled-components';
import { anyPropsAttrs, getFontColor } from 'helpers';

export const StyledDays = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  box-sizing: border-box;
`;

export const StyledWeekDay = styled.th`
  font-size: 16px;
  font-weight: lighter;
`;

export const StyledDay = styled.td`
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    height: 42px;
    min-height: 42px;
`;

const getVariantStyles = (props) => {
  const { disabled, isSelected, isHighlighted, theme: { colors } } = props;

  if (disabled) {
    return 'pointer-event: none';
  }

  if (isSelected) {
    return css`
      background-color: ${colors.BRAND_BG};
      color: ${colors.BACKGROUND_LIGHTER};
      cursor: pointer;

      &:hover {
        background-color: ${colors.BRAND_BG_HIGHLIGHT};
      }
    `;
  }

  if (isHighlighted) {
    return css`
      font-family: Roboto-Bold, sans-serif;
      background-color: ${colors.BRAND_SHADE};
      color: ${colors.BRAND_FONT};
      cursor: pointer;

      &:hover {
        color: ${colors.FONT};
      }
    `;
  }

  return css`
    cursor: pointer;

    &:hover {
      background-color: ${colors.GRAY_SHADE}
    }
  `;
};

export const StyledDayButton = styled.button.attrs(anyPropsAttrs)`
  font-family: Roboto-Bold, sans-serif;
  font-size: 18px;
  outline: none;
  background-color: transparent;
  border-radius: 48px;
  line-height: 36px;
  height: 38px;
  min-height: 38px;
  width: 38px;
  min-width: 38px;
  box-sizing: border-box;
  overflow: visible;
  text-transform: none;
  border: 1px solid transparent;
  color: ${getFontColor};
  ${getVariantStyles};
`;

import styled, { css, StyledProps } from 'styled-components';
import {
  anyPropsAttrs,
  getBgdColor,
  getFontShadeColor,
  getPositionStyles
} from 'helpers';
import { InputProps } from '../../types';

export const getColorStyles = (props: StyledProps<InputProps>) => {
  const { theme: { colors }, error, disabled } = props;

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      background-color: transparent;
      color: ${getFontShadeColor};

      & > div[data-el="date-time-picker-content"] {
        color: currentColor;
        border: 1px solid ${getFontShadeColor};
      }
    `
  }

  const hoverBorderColor = error ? colors.ERROR_SHADE : colors.BRAND_SHADE;
  const focusBorderColor = error ? colors.ERROR_HIGHLIGHT : colors.BRAND_FONT_HIGHLIGHT;

  return css`
    color: ${colors.FONT};
    transition: all 150ms linear;

    & > div[data-el="date-time-picker-content"] {
      color: currentColor;
      border: 1px solid ${colors.GRAY};
      background-color: ${getBgdColor};
      &::selection {
        background-color: ${colors.BRAND};
        color: ${colors.WHITE};
      }
    }

    &:hover {
      & > div[data-el="date-time-picker-content"] {
        background-color: ${hoverBorderColor};
        border-color: ${focusBorderColor};
      }
    }

    div[data-el="date-time-picker-content"]:focus {
      border-color: ${focusBorderColor};
    }
  `;
};

export const StyledDateTimePicker = styled.div.attrs(anyPropsAttrs)`
  ${getPositionStyles};
  ${getColorStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;

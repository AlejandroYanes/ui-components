import styled, { css, StyledProps } from 'styled-components';
import {
  getBgdColor,
  getFontShadeColor,
  getPositionStyles,
  PositionProps
} from 'helpers';
import { InputProps } from '../../types';

const getColorStyles = (props: StyledProps<InputProps>) => {
  const { theme: { colors }, error, disabled } = props;

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      background-color: transparent;
      color: ${getFontShadeColor};

      & > select {
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

    & > select {
      color: currentColor;
      border: 1px solid ${colors.GREY};
      background-color: ${getBgdColor};
      &::selection {
        background-color: ${colors.BRAND};
        color: ${colors.WHITE};
      }
    }

    &:hover {
      & > select {
        background-color: ${hoverBorderColor};
        border-color: ${focusBorderColor};
      }
    }

    input:focus {
      border-color: ${focusBorderColor};
    }
  `;
};

export const StyledContainer = styled.div<PositionProps>`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  ${getPositionStyles};
  ${getColorStyles};
`;

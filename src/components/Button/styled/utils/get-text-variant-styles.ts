import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';

const getFontHoverColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.BRAND_FONT_HIGHLIGHT;
  }

  if (color === 'font') {
    return colors.BACKGROUND_LIGHTER;
  }

  return  getColorVariation(colors, color, Variations.FONT_HIGHLIGHT);
}

export default function getTextVariantStyles(
  colors: ColorScheme,
  color: string,
  disabled: boolean,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: not-allowed;
      background-color: transparent;
      color: ${getFontShadeColor};

      & > svg > path {
        fill: ${getFontShadeColor};
      }
    `;
  }

  const fontColor = getBtnFontColor(colors, color);
  const fontHoverColor = getFontHoverColor(colors, color);

  return css`
    padding: 0;
    font-weight: bold;
    color: ${fontColor};
    background-color: transparent;

    & > svg > path {
      fill: ${fontColor};
    }

    &:hover, &:focus {
      color: ${fontHoverColor};

      & > svg > path {
        fill: ${fontHoverColor};
      }
    }
  `;
}

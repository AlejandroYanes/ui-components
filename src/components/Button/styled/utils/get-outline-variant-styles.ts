import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';
import getBtnFontHoverColor from './get-btn-font-hover-color';

const getBorderColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.GRAY;
  }

  return  getColorVariation(colors, color, Variations.FONT);
};

const getBorderHoverColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.BRAND_FONT_HIGHLIGHT;
  }

  return  getColorVariation(colors, color, Variations.FONT_HIGHLIGHT);
};

const getBgHoverColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.BRAND_SHADE;
  }

  return  getColorVariation(colors, color, Variations.SHADE);
};

export default function getOutlineVariantStyles(
  colors: ColorScheme,
  color: string,
  disabled: boolean,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      color: ${getFontShadeColor};
      background-color: transparent;
      border: 1px solid ${getFontShadeColor};
    `;
  }

  const fontColor = getBtnFontColor(colors, color);
  const borderColor = getBorderColor(colors, color);
  const borderHoverColor = getBorderHoverColor(colors, color);
  const fontHoverColor = getBtnFontHoverColor(colors, color);
  const bgHoverColor = getBgHoverColor(colors, color);

  return css`
    color: ${fontColor};
    background-color: transparent;
    border: 1px solid ${borderColor};

    &:hover, &:focus {
      color: ${fontHoverColor};
      border-color: ${borderHoverColor};
      background-color: ${bgHoverColor};
    }
  `;
}

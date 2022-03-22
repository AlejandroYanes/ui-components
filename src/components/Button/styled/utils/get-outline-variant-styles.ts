import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';
import getBtnFontHoverColor from './get-btn-font-hover-color';

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

  const fontColor = color === 'font'
    ? colors.FONT
    : getBtnFontColor(colors, color);
  const borderColor = color === 'font'
    ? colors.FONT
    : getColorVariation(colors, color, Variations.FONT);
  const borderHoverColor = color === 'font'
    ? colors.FONT
    : getColorVariation(colors, color, Variations.FONT_HIGHLIGHT)
  const fontHoverColor = color === 'font'
    ? colors.FONT
    : getBtnFontHoverColor(colors, color);
  const bgHoverColor = getColorVariation(colors, color, Variations.SHADE);

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

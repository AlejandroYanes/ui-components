import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';

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
    `;
  }

  const fontColor = color === 'font'
    ? colors.FONT
    : getBtnFontColor(colors, color);
  const fontHoverColor = color === 'font'
    ? colors.FONT
    : getColorVariation(colors, color, Variations.FONT_HIGHLIGHT);

  return css`
    padding: 0;
    font-weight: bold;
    color: ${fontColor};
    background-color: transparent;

    &:hover, &:focus {
      color: ${fontHoverColor};
    }
  `;
}

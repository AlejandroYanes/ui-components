import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';

export default function getFlatVariantStyles(
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
  const backgroundHoverColor = color === 'font'
    ? colors.FONT_SHADE
    : getColorVariation(colors, color, Variations.SHADE);

  return css`
    background-color: transparent;
    color: ${fontColor};

    &:hover, &:focus {
      color: ${fontHoverColor};
      background-color: ${backgroundHoverColor};
    }
  `;
}

import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontSecColor, getFontShadeColor } from 'helpers';

export default function getFillVariantStyles(
  colors: ColorScheme,
  color: string,
  disabled?: boolean,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      color: ${getFontSecColor};
      background-color: ${getFontShadeColor};
    `;
  }

  const fontColor = colors.BACKGROUND_LIGHTER;
  const fontHoverColor = colors.BACKGROUND_LIGHTER;

  const backgroundColor = (
    color === 'font'
      ? colors.FONT
      : getColorVariation(colors, color, Variations.BG)
  );
  const backgroundHoverColor = (
    color === 'font'
      ? colors.FONT
      : getColorVariation(colors, color, Variations.BG_HIGHLIGHT)
  );

  return css`
    color: ${fontColor};
    background-color: ${backgroundColor};

    &:hover, &:focus {
      color: ${fontHoverColor};
      background-color: ${backgroundHoverColor};
    }
  `;
}

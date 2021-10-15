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

      & > svg > path {
        fill: ${getFontShadeColor};
      }
    `;
  }

  const fontColor = (
    color === 'background' ? colors.FONT : colors.BACKGROUND_LIGHTER
  );
  const fontHoverColor = (
    color === 'background'
      ? colors.BRAND_FONT_HIGHLIGHT
      : colors.BACKGROUND_LIGHTER
  );

  const backgroundColor = (
    color === 'background'
      ? colors.BACKGROUND
      : getColorVariation(colors, color, Variations.BG)
  );
  const backgroundHoverColor = (
    color === 'background'
      ? colors.BRAND_SHADE
      : getColorVariation(colors, color, Variations.BG_HIGHLIGHT)
  );

  return css`
    color: ${fontColor};
    background-color: ${backgroundColor};

    & > svg > path {
      fill: ${fontColor};
    }

    &:hover, &:focus {
      color: ${fontHoverColor};
      background-color: ${backgroundHoverColor};

      & > svg > path {
        fill: ${fontHoverColor};
      }
    }
  `;
}

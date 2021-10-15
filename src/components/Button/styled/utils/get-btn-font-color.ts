import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation } from 'helpers';

export default function getBtnFontColor(
  colors: ColorScheme,
  color: string,
) {
  if (color === 'background') {
    return colors.FONT;
  }

  if (color === 'font') {
    return colors.BACKGROUND_LIGHTER;
  }

  return getColorVariation(colors, color, Variations.FONT);
}

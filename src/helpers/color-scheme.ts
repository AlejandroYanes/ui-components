import {
  changeColorLight,
  getBrightness,
  getContrastRatio,
  getShade,
} from 'helpers';
import {
  BackgroundScheme,
  ColorScheme,
  Palette,
  darkStyleColors,
  fixedColors,
  lightStyleColors,
} from 'styles/colors';
import { colorVariation } from 'styles/variables';
import { getColorLight } from './color-attrs';

function getColorFactor(color: string) {
  return getBrightness(color) > 128
    ? -0.01
    : 0.01;
}

export function balanceColorRatio(
  color: string,
  background: string,
  targetRatio = 5,
): string {
  let colorFactor = getColorFactor(background);
  let ratio = getContrastRatio(color, background);
  let balancedColor = color;

  while (ratio < targetRatio) {
    balancedColor = changeColorLight(color, colorFactor);

    if (getColorLight(balancedColor) === 100 || getColorLight(balancedColor) === 0) {
      break;
    }

    ratio = getContrastRatio(balancedColor, background);
    colorFactor += colorFactor;
  }

  return balancedColor;
}

function expandColors(colors: Palette, useDarkStyle) {
  const { BACKGROUND, ...rest } = colors;

  return Object.keys(rest).reduce((acc, color) => {
    const colorValue = colors[color];
    const colorFactor = useDarkStyle ? colorVariation : -colorVariation;
    const balancedColor = balanceColorRatio(colorValue, BACKGROUND);
    const balancedBgColor = useDarkStyle
      ? balanceColorRatio(colorValue, BACKGROUND, 3.2)
      : colorValue;

    return {
      ...acc,
      [color]: colorValue,
      [`${color}_HIGHLIGHT`]: changeColorLight(colorValue, colorFactor),
      [`${color}_BG`]: balancedBgColor,
      [`${color}_BG_HIGHLIGHT`]: changeColorLight(balancedBgColor, colorFactor),
      [`${color}_FONT`]: balancedColor,
      [`${color}_FONT_HIGHLIGHT`]: changeColorLight(balancedColor, colorFactor),
      [`${color}_SHADE`]: getShade(colorValue),
    };
  }, {} as ColorScheme);
}

export function composeColorScheme(palette: Palette): ColorScheme {
  const { BACKGROUND } = palette;
  const isDarkStyle = getBrightness(BACKGROUND) < 128;
  const lightColors = isDarkStyle ? darkStyleColors : lightStyleColors;
  const expandedColors = expandColors(palette, isDarkStyle);
  const backgroundColors: BackgroundScheme = {
    BACKGROUND,
    BACKGROUND_LIGHT: changeColorLight(BACKGROUND, -0.02),
    BACKGROUND_LIGHTER: changeColorLight(BACKGROUND, -0.03),
    BACKGROUND_SHADE: getShade(BACKGROUND),
  }

  return {
    ...expandedColors,
    ...fixedColors,
    ...lightColors,
    ...backgroundColors,
  };
}

import {
  FruitsTheme,
  GrapesTheme,
  LifeIsABeachTheme,
  DuskLightsTheme,
  NeonLightsTheme,
  SummerVibesTheme,
} from '../src/styles/themes';
import { basicColors, Configuration, NotificationCenter } from '../src';

const themes = {
  'fruits': FruitsTheme,
  'grapes': GrapesTheme,
  'beach': LifeIsABeachTheme,
  'dusk': DuskLightsTheme,
  'neon': NeonLightsTheme,
  'summer': SummerVibesTheme,
}


const getPalette = (themeName, background) => {
  const bgColor = !!background && background !== 'transparent'
    ? background
    : '#ffffff';
  return {
    ...basicColors,
    ...themes[themeName],
    BACKGROUND: bgColor,
  };
}

export const withThemeProvider = (Story, context) => {
  const { globals: { theme, backgrounds } } = context;
  const palette = getPalette(theme, backgrounds?.value);

  return (
    <Configuration palette={palette} locale="es">
      <Story {...context} />
      <NotificationCenter />
    </Configuration>
  )
}

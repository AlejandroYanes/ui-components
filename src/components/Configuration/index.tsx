import { FunctionComponent } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { basicColors, ColorScheme, Palette } from 'styles/colors';
import { composeColorScheme } from 'helpers';
import useLayout from './use-layout';
import { Layout } from './types';

export * from './types';

interface Props {
  palette: Palette;
}

interface Theme {
  colors: ColorScheme;
  layout: Layout;
}

const Configuration: FunctionComponent<Props> = (props) => {
  const { palette, children } = props;
  const layout = useLayout();

  const theme = {
    colors: composeColorScheme({ ...basicColors ,...palette }),
    layout,
  };

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export const useAppLayout = () => (useTheme() as Theme).layout;
export const useAppColors = () => (useTheme() as Theme).colors;

export default Configuration;

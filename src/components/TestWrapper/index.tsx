import { basicColors, Palette } from 'styles/colors';
import Configuration from '../Configuration';

const palette: Palette = {
  BRAND: '#d2463b',
  ACCENT: '#017f97',
  BACKGROUND: '#ffffff',
  ...basicColors,
};

export default function TestWrapper({ component: Component, ...rest }) {

  return (
    <Configuration palette={palette}>
      <Component {...rest} />
    </Configuration>
  );
}

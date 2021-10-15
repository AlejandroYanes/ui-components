import { CSSProperties } from 'react';
import { Colors } from 'styles/colors';

export interface IconProps {
  color?: Colors;
  secondaryColor?: Colors;
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

import { CSSProperties } from 'react';
import { Colors } from 'styles/colors';

export interface IconProps {
  id?: string;
  color?: Colors;
  height?: number | string;
  width?: number | string;
  className?: string;
  style?: CSSProperties;
}

import { PositionProps } from 'helpers';

export type IconButtonSize = 'small' | 'medium' | 'large' | 'x-large';
export type ButtonVariants = 'text' | 'flat' | 'outline' | 'fill';
export type ButtonColors = (
  'brand' |
  'accent' |
  'success' |
  'info' |
  'warning' |
  'error' |
  'font' |
  'background'
  );

export interface CommonButtonProps extends PositionProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  onClick: (event) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

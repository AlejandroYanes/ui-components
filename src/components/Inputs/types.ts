import { ReactNode } from 'react';
import { PositionProps } from 'helpers';

export interface InputProps extends PositionProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  value: any;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onKeyDown?: (event) => void;
  showClear?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

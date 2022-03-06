import { PositionProps } from 'helpers';
import { Icons } from '../SvgIcon';

export interface InputProps extends PositionProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  icon?: Icons;
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

import {
  getFillVariantStyles,
  getFlatVariantStyles,
  getOutlineVariantStyles,
  getTextVariantStyles,
} from './index';

export default function getVariantStyles(props) {
  const { theme, ...buttonProps } = props;
  const { variant, color, disabled } = buttonProps;
  const { colors } = theme;

  switch (variant) {
    case 'text':
      return getTextVariantStyles(colors, color, disabled);
    case 'outline':
      return getOutlineVariantStyles(colors, color, disabled);
    case 'flat':
      return getFlatVariantStyles(colors, color, disabled);
    case 'fill':
      return getFillVariantStyles(colors, color, disabled);
  }
}

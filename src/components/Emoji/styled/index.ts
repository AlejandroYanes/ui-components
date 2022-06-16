import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const sizeMap = {
  small: 13,
  normal: 16,
  large: 32,
  page: 76,
};

const getSize = (props) => {
  const { size } = props;

  if (typeof size === 'number') {
    return `font-size: ${size}px`;
  }

  return `font-size: ${sizeMap[size]}px`;
};

export const Emoji = styled.span.attrs(anyPropsAttrs)`
  ${getSize};
  ${getPositionStyles};
`;

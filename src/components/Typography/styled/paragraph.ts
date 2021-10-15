import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const sizeMap = {
  small: css`font-size: 12px; line-height: 20px;`,
  medium: css`font-size: 16px; line-height: 24px;`,
  large: css`font-size: 20px; line-height: 28px;`,
};

export const Paragraph = styled.p.attrs(anyPropsAttrs)`
  ${({ size }) => sizeMap[size]};
  padding: 0 6px;
  font-family: Roboto-Regular, sans-serif;
  ${getPositionStyles};
`;

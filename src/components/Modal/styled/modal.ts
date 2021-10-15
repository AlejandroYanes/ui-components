import styled, { css } from 'styled-components';
import { anyPropsAttrs, getBgdColor } from 'helpers';

const sizeMap = {
  auto: 'auto',
  small: '40vw',
  medium: '60vw',
  large: '90vw',
};

const commonStyles = css`
  padding: 16px 0;
  border-radius: 16px;
  min-height: 150px;
  max-height: 90vh;
  width: ${({ size }: any) => sizeMap[size]};
`;

const styleMap = {
  auto: commonStyles,
  small: commonStyles,
  medium: commonStyles,
  large: commonStyles,
  drawer: `
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 480px;
    padding: 0;
  `,
  mobile: `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 0;
  `,
};

export const StyledModal = styled.article.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  background-color: ${getBgdColor};
  ${({ size }) => styleMap[size]};
`;

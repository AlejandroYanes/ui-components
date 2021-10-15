import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  1: '48px',
  2: '28px',
  3: '20px',
};

const weightMap = {
  'normal': css`font-family: Bitter-Regular, serif; font-weight: normal;`,
  'light': css`font-family: Bitter-ExtraLight, serif; font-weight: lighter`,
  'bold': css`font-family: Bitter-ExtraBold, serif; font-weight: bolder;`,
};

const getTextStyles = (props) => {
  const { level, align, weight, size, lineHeight, inline } = props;

  return css`
    font-size: ${size ? `${size}px` : sizeMap[level]};
    text-align: ${align};
    ${weightMap[weight]};
    ${lineHeight ? `line-height: ${lineHeight}px` : ''};
    ${inline ? 'display: inline;' : ''};
  `;
};

const getColor = (props) => {
  const { theme: { colors }, color } = props;

  if (color === 'secondary') {
    return `color: ${colors.FONT_SECONDARY}`;
  }

  if (color === 'font') {
    return `color: ${colors.FONT}`;
  }

  if (color === 'background') {
    return `color: ${colors.BACKGROUND_LIGHTER}`;
  }

  const fontColor = colors[`${color.toUpperCase()}_FONT`];

  return `color: ${fontColor}`;
};


export const Heading = styled.h1.attrs(anyPropsAttrs)`
  white-space: normal;
  ${getTextStyles};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;

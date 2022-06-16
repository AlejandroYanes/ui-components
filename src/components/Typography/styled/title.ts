import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  1: '48px',
  2: '28px',
  3: '20px',
};

const weightMap = {
  light: 200,
  normal: 400,
  bold: 700,
};

const getTextStyles = (props) => {
  const { level, align, weight, size, lineHeight, inline } = props;

  return css`
    font-size: ${size ? `${size}px` : sizeMap[level]};
    text-align: ${align};
    font-weight: ${weightMap[weight]};
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

const getItalicStyle = (props) => {
  const { italic } = props;

  if (italic) {
    return css`font-style: italic`;
  }

  return '';
};


export const Heading = styled.h1.attrs(anyPropsAttrs)`
  white-space: normal;
  ${getTextStyles};
  ${getColor};
  ${getItalicStyle};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;

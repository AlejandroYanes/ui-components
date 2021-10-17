import styled, { css } from 'styled-components';
import {
  anyPropsAttrs,
  getEllipsisStyles,
  getPositionStyles,
  getThemeBlackColor,
} from 'helpers';

const sizeMap = {
  small: '12px',
  medium: '16px',
  large: '20px',
};



const getColor = (props) => {
  const { theme: { colors }, color } = props;

  if (color === 'black') {
    return `color: ${getThemeBlackColor({ theme: props.theme })}`;
  }

  if (color === 'secondary') {
    return `color: ${colors.FONT_SECONDARY}`;
  }

  if (color === 'font') {
    return `color: ${colors.FONT}`;
  }

  if (color === 'background') {
    return `color: ${colors.BACKGROUND}`;
  }

  if (color === 'white') {
    return `color: ${colors.WHITE}`;
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

const weightMap = {
  light: 200,
  normal: 400,
  bold: 700,
};

export const Text = styled.span.attrs(anyPropsAttrs)`
  white-space: normal;
  box-sizing: border-box;
  font-weight: ${({ weight }) => weightMap[weight]};
  font-size: ${({ size }) => sizeMap[size]};
  text-align: ${({ align }) => align};
  ${getItalicStyle};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;

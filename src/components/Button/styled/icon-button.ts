import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { getVariantStyles } from './utils';

const getSize = (props) => {
  const { size } = props;

  switch (size) {
    case 'small':
      return `
        height: 28px;
        width: 28px;
        min-width: 28px;
      `;
    case 'medium':
      return `
        height: 32px;
        width: 32px;
        min-width: 32px;
      `;
    case 'large':
      return `
        height: 46px;
        width: 46px;
        min-width: 46px;
      `;
    case 'x-large':
      return `
        height: 70px;
        width: 70px;
        min-width: 70px;
      `;
    default:
      return `
        height: 32px;
        width: 32px;
        min-width: 32px;
      `;
  }
};

const getToggleStyles = (props) => {
  const { toggle, theme, variant, color } = props;

  if (toggle) {
    const { colors } = theme;

    switch (variant) {
      case 'base': {
        const fontHoverColor = color === 'font'
          ? colors.FONT
          : colors[`${color.toUpperCase()}_HIGHLIGHT`];

        return css`
        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
        }
      `;
      }
      case 'flat': {
        const fontHoverColor = color === 'font'
          ? colors.FONT
          : colors[`${color.toUpperCase()}_HIGHLIGHT`];

        return css`
        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
        }
      `;
      }
      case 'fill': {
        const backgroundHoverColor = colors[`${color.toUpperCase()}_HIGHLIGHT`];

        return css`
       &:hover, &:focus {
          background-color: ${backgroundHoverColor};
          border-color: ${backgroundHoverColor};
          color: ${colors.WHITE};
        }
      `;
      }
    }
  }

  return undefined;
};

export const StyledIconButton = styled.button.attrs(anyPropsAttrs)`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 150ms linear;
  ${getSize};
  ${getToggleStyles};
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.9);
  }
`;

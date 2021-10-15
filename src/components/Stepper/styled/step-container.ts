import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { borderSize, stepSize } from './constants';

const getContainerStyles = (props) => {
  const { readOnly, isActive, theme: { colors } } = props;

  if (readOnly) {
    const borderColor = isActive ? colors.BRAND : 'transparent';
    return  css`border-color: ${borderColor};`;
  }

  const borderColor = isActive ? colors.BRAND : 'transparent';
  const hoverColor = isActive ? colors.BRAND_HIGHLIGHT : colors.BRAND_SHADE;
  const fontHoverColor = isActive ? colors.WHITE : colors.FONT;
  const focusColor = colors.BRAND_HIGHLIGHT;

  return css`
    cursor: pointer;
    border-color: ${borderColor};

    &:hover {
    outline: none;
    border-color: ${hoverColor};

    > span {
      color: ${fontHoverColor};
      background-color: ${hoverColor};
    }
  }

    &:focus, &:active {
    outline: none;
    border-color: ${focusColor};

    > span {
      color: ${({ theme }) => theme.colors.BACKGROUND_LIGHTER};
      background-color: ${focusColor};
    }
  }
  `;
};

export const Container = styled.button.attrs(anyPropsAttrs)`
  padding: 0;
  border-radius: 50px;
  height: ${stepSize}px;
  width: ${stepSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${borderSize}px solid transparent;
  background: transparent;
  transition: all 150ms linear;
  ${getContainerStyles};
`;

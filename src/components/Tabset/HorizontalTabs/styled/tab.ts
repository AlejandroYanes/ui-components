import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Label } from './label';
import { Mark } from './mark';

const getWidthStyles = (props) => {
  const { fullWidth } = props;
  return fullWidth ? `flex: 1` : 'flex-shrink: 0;';
};

const getColorStyles = (props) => {
  const { selected, disableFocus, theme: { colors } } = props;

  const basicStyles = css`
    ${Label} {
      color: ${selected ? colors.BRAND_FONT : colors.FONT_SECONDARY};
    }

    svg > path {
      fill: ${selected ? colors.BRAND_FONT : colors.FONT_SECONDARY};
    }

    ${Mark} {
      background-color: ${colors.BRAND_FONT};
    }

    &:focus {
      outline: none;
    }
  `;

  if (disableFocus) {
    return basicStyles;
  }

  return css`
    ${basicStyles};

    &:hover, &:focus {
      outline: none;
      background-color: ${colors.BRAND_SHADE};

      ${Label} {
        color: ${colors.BRAND_FONT_HIGHLIGHT};
      }

      svg > path {
        fill: ${colors.BRAND_FONT_HIGHLIGHT};
      }

      ${Mark} {
        background-color: ${colors.BRAND_FONT_HIGHLIGHT};
      }
    }
  `;
};

export const StyledTab = styled.li.attrs(anyPropsAttrs)`
  position: relative;
  padding: 12px 20px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
  min-width: 44px;
  height: 44px;
  ${getWidthStyles};
  ${getColorStyles};
  transition: all 150ms linear;

  svg > path {
    transition: all 150ms linear;
  }

  &:last-child {
    margin-right: 0;
  }
`;

import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Label } from './label';
import { Mark } from './mark';

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
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 44px;
  height: 44px;
  ${getColorStyles};
  transition: all 150ms linear;

  svg > path {
    transition: all 150ms linear;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

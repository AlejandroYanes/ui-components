import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { anyPropsAttrs, getFontColor } from 'helpers';

const elementBorderRadius = '16px';

const getActionStyles = (props) => {
  const { warning, danger, theme: { colors } } = props;
  const fontColor = danger ? colors.ERROR_FONT : colors.FONT;
  const backgroundColor = (
    (warning && colors.WARNING_BG) ||
    (danger && colors.ERROR_BG) ||
    colors.BRAND_BG
  );
  const highlightColor = (
    (warning && colors.WARNING_BG_HIGHLIGHT) ||
    (danger && colors.ERROR_BG_HIGHLIGHT) ||
    colors.BRAND_BG_HIGHLIGHT
  );

  return css`
    span[data-el="menu-link-label"] {
      color: ${fontColor};
    }

    &:hover {
      span[data-el="menu-link-label"] {
        color: ${colors.BACKGROUND_LIGHTER};
      }

      cursor: pointer;
      background-color: ${backgroundColor};

      svg > path {
        fill: ${colors.BACKGROUND_LIGHTER};
      }
    }

    &:active {
      background-color: ${highlightColor};
    }
  `;
};

export const MenuItem = styled.li.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  transition: all 150ms linear;

  &:first-child {
    border-top-right-radius: ${elementBorderRadius};
    border-top-left-radius: ${elementBorderRadius};
  }

  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: ${elementBorderRadius};
    border-bottom-left-radius: ${elementBorderRadius};
  }

  span[data-el="menu-link-label"] {
    font-family: Roboto-Bold, sans-serif;
    font-size: 16px;
    color: ${getFontColor};
  }

  ${getActionStyles};
`;

export const MenuLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  text-decoration: none;

  span[data-el="menu-link-label"] {
    font-family: Nunito-ExtraBold, sans-serif;
    font-size: 16px;
    color: ${getFontColor};
  }
`;

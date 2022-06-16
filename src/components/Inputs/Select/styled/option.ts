import styled from 'styled-components';
import {
  anyPropsAttrs,
  getBgdLighterColor,
  getBrandBgColor,
  getBrandBgHlColor,
  getFontColor,
} from 'helpers';

const getSelectedColors = (props) => {
  const { isSelected, theme: { colors } } = props;

  if (isSelected) {
    return `
      color: ${colors.BRAND_FONT_HIGHLIGHT};
      background-color: ${colors.BRAND_SHADE};
    `;
  }
};

export const StyledOption = styled.li.attrs(anyPropsAttrs)`
  margin: 0;
  padding: 0 16px 0 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: ${getFontColor};
  ${getSelectedColors};

  & > span[data-el="option-content"] {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-family: Roboto-Bold, sans-serif;
  }

  &:hover {
    cursor: pointer;
    color: ${getBgdLighterColor};
    background-color: ${getBrandBgColor};

    svg > path {
      fill: ${getBgdLighterColor};
    }
  }

  &:active {
    background-color: ${getBrandBgHlColor};
  }
`;

export const OptionIcon = styled.div`
  position: absolute;
  left: 4px;
  height: 20px;
`;

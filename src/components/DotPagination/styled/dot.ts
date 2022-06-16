import styled, { css } from 'styled-components';
import { Variations } from 'styles/colors';
import { anyPropsAttrs, getColorVariation, getGreyColor } from 'helpers';

const dotSize = '8px';

const getActiveDotStyle = (props) => {
  const { active, color, theme: { colors } } = props;
  if (active) {
    const activeColor = getColorVariation(colors, color, Variations.BG);

    return css`
      background-color: ${activeColor};
      transform: scale(1.6);
    `;
  }
  return '';
};

export const Dot = styled.li.attrs(anyPropsAttrs)`
  width: ${dotSize};
  height: ${dotSize};
  border-radius: 50px;
  margin-right: 12px;
  background-color: ${getGreyColor};
  transition: all 150ms linear;
  ${getActiveDotStyle};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { borderSize, stepSize } from './constants';

const getStepStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.BACKGROUND_LIGHTER;
  const fontColor = isActive ? colors.BACKGROUND_LIGHTER : colors.FONT;
  const size = isActive ? stepSize - 10 - borderSize : stepSize - borderSize;

  return css`
      background-color: ${bgColor};
      color: ${fontColor};
      width: ${size}px;
      height: ${size}px;
    `;
};

export const StyledStep = styled.span.attrs(anyPropsAttrs)`
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${stepSize / 2}px;
  transition: all 150ms linear;
  ${getStepStyles};
`;

import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/Configuration';
import { borderSize, stepSize } from './constants';

const guideStyles = {
  [Layout.DESKTOP]: css`
    width: ${borderSize}px;
    height: ${stepSize * 0.65}px;
  `,
  [Layout.TABLET]: css`
    width: ${borderSize}px;
    height: ${stepSize * 0.65}px;
  `,
  [Layout.MOBILE]: css`
    height: ${borderSize}px;
    flex: 1;
  `,
};

const getGuideStyles = (props) => {
  const { isActive, theme: { colors } } = props;
  const bgColor = isActive ? colors.BRAND : colors.BACKGROUND_LIGHTER;

  return css`
      background-color: ${bgColor};
    `;
};

export const Guide = styled.div.attrs(anyPropsAttrs)`
  ${({ theme }) => guideStyles[theme.layout]}
  ${getGuideStyles};
`;

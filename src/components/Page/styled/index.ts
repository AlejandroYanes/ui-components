import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/Configuration';

const layoutMap = {
  [Layout.DESKTOP]: css`
    width: 100%;
    padding: 48px;
  `,
  [Layout.TABLET]: css`
    width: 100%;
    padding: 48px;
  `,
  [Layout.MOBILE]: css`
    width: 100%;
    padding: 16px 16px 96px;
  `,
};

export const StyledPage = styled.section.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  ${({ theme: { layout } }) => layoutMap[layout]};
`;

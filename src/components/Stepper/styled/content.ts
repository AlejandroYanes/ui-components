import styled, { css } from 'styled-components';
import { Layout } from 'components/base-components/Configuration';

const contentStyles = {
  [Layout.DESKTOP]: css`
    padding-left: 32px;
    flex: 1;
  `,
  [Layout.TABLET]: css`
    padding-left: 32px;
    flex: 1;
  `,
  [Layout.MOBILE]: css`
    padding-top: 32px;
  `,
};

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 0;
  ${({ theme }) => contentStyles[theme.layout]};
`;

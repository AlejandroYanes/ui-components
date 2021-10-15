import styled, { css } from 'styled-components';
import { Layout } from 'components/base-components/Configuration';

const stepsStyles = {
  [Layout.DESKTOP]: css`
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
  `,
  [Layout.TABLET]: css`
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
  `,
  [Layout.MOBILE]: css`
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
  `,
};

export const StepsContainer = styled.aside`
  display: flex;
  ${({ theme }) => stepsStyles[theme.layout]};
`;

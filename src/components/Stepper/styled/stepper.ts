import styled, { css } from 'styled-components';
import { getPositionStyles } from 'helpers';
import { Layout } from 'components/Configuration';

const stepperStyles = {
  [Layout.DESKTOP]: css`
    display: flex;
    align-items: stretch;
  `,
  [Layout.TABLET]: css`
    display: flex;
    align-items: stretch;
  `,
  [Layout.MOBILE]: css`
    display: flex;
    flex-direction: column;
  `,
};

export const StyledStepper = styled.article`
  ${({ theme }) => stepperStyles[theme.layout]};
  ${getPositionStyles};
`;

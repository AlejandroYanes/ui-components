import styled, { css } from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { anyPropsAttrs } from 'helpers';
import { Layout } from 'components/Configuration';

const layoutMap = {
  [Layout.DESKTOP]: css`margin: 0 32px 0 0`,
  [Layout.TABLET]: css`margin: 0 32px 0 0`,
  [Layout.MOBILE]: css`
    margin: 0;
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
  `,
};

export const Notifications = styled.ul.attrs(anyPropsAttrs)`
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;
  ${({ theme: { layout } }) => layoutMap[layout]};
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  z-index: ${ZLevels.notifications};
`;

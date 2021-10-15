import styled, { css } from 'styled-components';
import { getBgdColor } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const typeMap = {
  'date': {
    [Layout.DESKTOP]: css`
      height: 360px;
      width: 600px;
    `,
    [Layout.TABLET]: css`
      height: 360px;
      width: 600px;
    `,
    [Layout.MOBILE]: css`
      height: 360px;
      width: 90vw;
    `,
  },
  'time': {
    [Layout.DESKTOP]: css`height: 380px;`,
    [Layout.TABLET]: css`height: 380px;`,
    [Layout.MOBILE]: css`height: 380px;`,
  },
  'date-time': {
    [Layout.DESKTOP]: css`
      height: 540px;
      width: 600px;
    `,
    [Layout.TABLET]: css`
      height: 540px;
      width: 600px;
    `,
    [Layout.MOBILE]: css`
      height: 540px;
      width: 90vw;
    `,
  },
  'date-range': {
    [Layout.DESKTOP]: css`
      height: 460px;
      width: 680px;
    `,
    [Layout.TABLET]: css`
      height: 460px;
      width: 680px;
    `,
    [Layout.MOBILE]: css`
      height: 460px;
      width: 90vw;
    `,
  },
  'time-range': {
    [Layout.DESKTOP]: css`
      height: 375px;
    `,
    [Layout.TABLET]: css`
      height: 375px;
    `,
    [Layout.MOBILE]: css`
      height: 460px;
    `
  },
};

const getSize = (props) => {
  const { type, theme: { layout } } = props;
  return typeMap[type][layout];
};

export const StyledCalendarModal = styled.div.attrs((props: any) => props)`
  ${getSize};
  display: flex;
  flex-direction: column;
  background-color: ${getBgdColor};
  padding: 16px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const ClockWrapper = styled.div`
  margin: 20px auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
`;

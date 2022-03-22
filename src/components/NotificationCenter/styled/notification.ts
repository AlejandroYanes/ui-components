import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getBgdColor } from 'helpers';
import { Layout } from 'components/Configuration';

const widthMap = {
  [Layout.DESKTOP]: `320px;`,
  [Layout.TABLET]: `320px`,
  [Layout.MOBILE]: '100%;',
};

export const Notification = styled(motion.li)`
  padding: 16px;
  margin-top: 16px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: ${getBgdColor};
  border: 1px solid ${({ theme }) => theme.colors.GREY};
  width: ${({ theme: { layout } }) => widthMap[layout]};

  &:last-child {
    margin-top: 32px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  box-sizing: border-box;
`;

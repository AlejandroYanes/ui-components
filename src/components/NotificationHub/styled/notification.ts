import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardWidth } from 'styles/variables';
import { getFontColor } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

const widthMap = {
  [Layout.DESKTOP]: `width: calc(${cardWidth} / 1.6);`,
  [Layout.TABLET]: `width: calc(${cardWidth} / 1.6);`,
  [Layout.MOBILE]: 'width: 100%;',
};

export const Notification = styled(motion.li)`
  padding: 16px;
  margin-top: 16px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: ${getFontColor};
  ${({ theme: { layout } }) => widthMap[layout]};

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

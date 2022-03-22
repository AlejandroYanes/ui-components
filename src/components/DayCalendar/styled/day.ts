import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ZLevels } from 'styles/z-levels';
import { getAccentBgColor, getBgdLightColor } from 'helpers';

export const Day = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-size: 24px;
  border-radius: 8px;
  height: 48px;
  width: 48px;
  flex-shrink: 0;

  &:hover, &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.GREY_SHADE};
  }
`;

const getNumberColor = ({ isSelected, theme: { colors } }) => {
  return isSelected ? colors.BACKGROUND_LIGHTER : colors.FONT;
};

export const DayNumber = styled.span.attrs((props: any) => props)`
  position: absolute;
  margin: auto;
  z-index: ${ZLevels.componentLevel2};
  color: ${getNumberColor};
`;

export const Mark = styled(motion.div)`
  position: absolute;
  z-index: ${ZLevels.componentLevel1};
  height: 86px;
  width: 60px;
  border-radius: 20px;
  pointer-events: none;
  border: 6px solid ${getBgdLightColor};
  background-color: ${getAccentBgColor};
`;

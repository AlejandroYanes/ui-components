import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ZLevels } from 'styles/z-levels';

export const Mark = styled(motion.div)`
  height: 2px;
  border-radius: 50px;
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: ${ZLevels.componentLevel1};
`;

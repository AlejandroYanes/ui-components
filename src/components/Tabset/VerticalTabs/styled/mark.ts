import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ZLevels } from 'styles/z-levels';

export const Mark = styled(motion.div)`
  width: 2px;
  border-radius: 50px;
  position: absolute;
  right: -2px;
  top: 0;
  bottom: 0;
  z-index: ${ZLevels.componentLevel1};
`;

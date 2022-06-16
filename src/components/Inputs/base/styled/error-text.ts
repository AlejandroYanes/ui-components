import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getErrorFontColor } from 'helpers';

export const ErrorWrapper = styled.div`
  position: relative;
`;

export const StyledErrorText = styled(motion.span)`
  font-family: Nunito-ExtraBold, sans-serif;
  font-size: 13px;
  position: absolute;
  top: 0;
  color: ${getErrorFontColor};
  padding: 4px 20px 0 20px;
`;

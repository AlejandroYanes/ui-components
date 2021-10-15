import styled from 'styled-components';
import { motion } from 'framer-motion';
import { anyPropsAttrs } from 'helpers';
import { getActiveStyles } from './marker';

export const HourLabel = styled(motion.div).attrs(anyPropsAttrs)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 6px;
  font-size: ${({ reduced }) => reduced ? '20px' : '26px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 100ms linear;
`;

export const HourButton = styled.button.attrs(anyPropsAttrs)`
  width: 36px;
  height: 36px;
  outline: none;
  border: none;
  padding: 0;
  margin: 2px;
  position: relative;
  background-color: transparent;
  box-sizing: border-box;

  ${HourLabel} {
    ${getActiveStyles};
  }

  &:active {
    ${HourLabel} {
      background-color: ${({ theme }) => theme.colors.BRAND};
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }
`;

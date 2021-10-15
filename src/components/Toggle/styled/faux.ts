import styled from 'styled-components';
import { motion } from 'framer-motion';
import { anyPropsAttrs } from 'helpers';

const getStyles = (props) => {
  const { checked, theme: { colors } } = props;
  const baseColor = checked ? colors.ACCENT : colors.GRAY;
  const focusColor = checked ? colors.ACCENT_HIGHLIGHT : colors.GRAY_DARK;

  return `
    justify-content: ${checked ? 'flex-end' : 'flex-start'};
    background-color: ${baseColor};

    &:hover {
      background-color: ${focusColor};
    }
    &:focus {
      outline: none;
      background-color: ${focusColor};
    }
  `;
};

export const FauxContainer = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  height: 26px;
  min-width: 48px;
  border-radius: 18px;
  overflow: hidden;
  padding: 2px;
  cursor: pointer;
  ${getStyles};
`;

export const FauxNob = styled(motion.div)`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

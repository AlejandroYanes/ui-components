import styled from 'styled-components';
import { inputBorderRadius } from 'styles/variables';

const getLeftPadding = (props) => `${props.padLeft ? 48 : 20}px`;
const getRightPadding = (props) => `${props.padRight ? 48 : 16}px`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  padding: 8px ${getRightPadding} 8px ${getLeftPadding};
  border-radius: ${inputBorderRadius};
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  position: relative;
`;

export const Separator = styled.div<{ disabled: boolean }>`
  width: 1px;
  background-color: ${({ theme, disabled }) => (
    disabled ? theme.colors.FONT_SHADE : theme.colors.GRAY
  )};
  height: 20px;
`;



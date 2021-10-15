import styled from 'styled-components';
import { getPositionStyles, PositionProps } from 'helpers';
import { getColorStyles } from 'components/base-components/Inputs/Input/styled/input';

export const StyledContainer = styled.div.attrs((props: PositionProps) => props)`
  ${getPositionStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

export const StyledTextArea = styled.textarea`
  border-radius: 10px;
  font-size: 16px;
  font-family: Roboto-Regular, sans-serif;
  letter-spacing: 0.5px;
  outline: none;
  padding: 8px 40px 8px 20px;
  margin: 0;
  min-width: 0;
  min-height: 40px;
  box-sizing: border-box;
  resize: none;
  ${getColorStyles};
  transition: all 150ms linear;
`;

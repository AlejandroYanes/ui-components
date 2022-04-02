import styled from 'styled-components';
import { elementHeight, inputBorderRadius } from 'styles';

const getLeftPadding = (props) => `${props.paddLeft ? 48 : 20}px`;

export const StyledNativeSelect = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  width: 100%;
  position: relative;
  height: ${elementHeight};
  border-radius: ${inputBorderRadius};
  padding: 8px 32px 8px ${getLeftPadding};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

import styled from 'styled-components';
import { elementHeight, inputBorderRadius } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';

const getLeftPadding = (props) => `${props.paddLeft ? 48 : 20}px`;

export const Content = styled.div.attrs(anyPropsAttrs)`
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
  padding: 8px 48px 8px ${getLeftPadding};
`;

export const TrayContainer = styled.div`
  height: 0;
  position: relative;
  width: 100%;
`;

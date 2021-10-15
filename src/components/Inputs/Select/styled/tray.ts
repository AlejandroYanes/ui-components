import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import {
  anyPropsAttrs,
  getBgdColor,
  getGrayColor,
} from 'helpers';

const getFloatingStyles = (props) => {
  const { height, float, hidden } = props;

  return `
    opacity: ${hidden ? 0 : 1};
    height: ${!!height ? `${height}px` : 'auto'};
    ${float === 'bottom' ? 'top: 6px' : 'bottom: 48px'};
  `;
};

export const StyledOptionsTray = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  ${getFloatingStyles};
  left: 0;
  right: 0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: ${ZLevels.componentLevel2};
  background-color: ${getBgdColor};
  border: 1px solid ${getGrayColor};
`;

export const Edge = styled.div`
  width: 100%;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  flex: 1;
  overflow: hidden auto;
`;

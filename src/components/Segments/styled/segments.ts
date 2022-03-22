import styled from 'styled-components';
import {
  getBgdColor,
  getGrayColor,
  getPositionStyles,
} from 'helpers';

export const Segments = styled.ul`
  list-style: none;
  display: flex;
  padding: 4px;
  border-radius: 20px;
  transition: all 150ms linear;
  background-color: ${getBgdColor};
  border: 1px solid ${getGrayColor};
  ${getPositionStyles};
`;

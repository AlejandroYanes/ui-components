import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  ${getPositionStyles};
`;

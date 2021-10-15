import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const StyledDateTimePicker = styled.div.attrs(anyPropsAttrs)`
  ${getPositionStyles};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;

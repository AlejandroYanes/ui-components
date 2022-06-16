import styled from 'styled-components';
import { elementHeight } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';

export const AbsoluteContent = styled.div.attrs(anyPropsAttrs)`
  position: absolute;
  top: ${({ topSpaced }) => topSpaced ? '25px' : '0'};
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 20px'};
  height: ${elementHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

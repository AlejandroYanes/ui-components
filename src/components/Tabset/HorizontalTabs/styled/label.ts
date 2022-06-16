import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getWidthStyles = (props) => {
  const { spaced } = props;

  return `
    margin-left: ${spaced ? '8px' : '0'};
    width: auto;
  `;
};

export const Label = styled.span.attrs(anyPropsAttrs)`
  ${getWidthStyles};
  white-space: nowrap;
  font-size: 18px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  transition: all 150ms linear;
`;

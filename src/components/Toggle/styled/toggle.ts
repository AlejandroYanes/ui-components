import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const getDirection = (props) => {
  const { rtl } = props;

  if (rtl) {
    return 'flex-direction: row-reverse';
  }
  return 'flex-direction: row';
};

export const StyledToggle = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  ${getDirection};
  ${getPositionStyles};
`;

export const HiddenInput = styled.input`
  position: absolute !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  text-transform: none !important;
  white-space: nowrap !important;
`;

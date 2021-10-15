import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

const getAbsoluteStyles = (props) => {
  const { top, right, bottom, left, height, width } = props;

  return `
    top: ${typeof top === 'number' ? `${top}px` : top};
    right: ${typeof right === 'number' ? `${right}px` : right};
    bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom};
    left: ${typeof left === 'number' ? `${left}px` : left};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
  `;
};

export const StyledAbsolute = styled.div`
  position: absolute;
  ${getAbsoluteStyles};
  ${getPositionStyles};
`;

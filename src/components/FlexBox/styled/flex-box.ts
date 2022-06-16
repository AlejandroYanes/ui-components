import styled, { css } from 'styled-components';
import { getEllipsisStyles, getPositionStyles } from 'helpers';

const getLayoutStyles = (props) => {
  const {
    direction,
    align,
    justify,
    wrap,
    width,
    height,
    grow,
    flex,
  } = props;

  return css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap ? 'wrap' : 'initial'};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    ${grow ? 'flex: 1;' : ''};
    ${flex ? `flex: ${flex}` : ''};
  `;
};

export const StyledFlexBox = styled.div`
  position: relative;
  display: flex;
  ${getLayoutStyles};
  ${getPositionStyles}
  ${getEllipsisStyles};
`;

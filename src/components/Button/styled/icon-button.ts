import styled, { css } from 'styled-components';
import { getPositionStyles } from 'helpers';
import { elementHeight } from 'styles';
import { getVariantStyles } from './utils';

const sizeMap: { [ size: string ]: string } = {
  small: '28px',
  medium: elementHeight,
  large: '48px',
  'x-large': '72px',
};

const getSize = (props) => {
  const { size } = props;
  return css`
    height: ${sizeMap[size]};
    width: ${sizeMap[size]};
    min-width: ${sizeMap[size]};
    //font-size: ${sizeMap[size]};
  `;
};

export const StyledIconButton = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 100ms linear;
  ${getSize};
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.98);
  }
`;

import styled, { css } from 'styled-components';
import {
  anyPropsAttrs,
  getBgdColor,
  getPositionStyles
} from 'helpers';

const avatarSizes = {
  'x-small': { width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' },
  small: { width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' },
  medium: { width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' },
  large: { width: '64px', height: '64px', minWidth: '64px', minHeight: '64px' },
  'x-large': { width: '86px', height: '86px', minWidth: '86px', minHeight: '86px' },
  'xx-large': { width: '102px', height: '102px', minWidth: '102px', minHeight: '102px' },
};

const getSizeStyles = ({ size }) => avatarSizes[size];

const getClickableStyles = (props) => {
  const { clickable, theme: { colors } } = props;

  if (clickable) {
    return css`
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 150ms linear;

      &:active {
        transform: scale(0.9);
      }

      &:focus {
        outline: none;
        border-color: ${colors.ACCENT};
      }
    `;
  }

  return css`
      &:focus {
        outline: none;
      }
  `;
};

export const StyledAvatar = styled.div.attrs(anyPropsAttrs)`
  border-radius: 50%;
  box-sizing: content-box;
  overflow: hidden;
  background-color: ${getBgdColor};
  ${getSizeStyles};
  ${getClickableStyles};
  ${getPositionStyles};

  & > svg {
    ${getSizeStyles};
  }

  & > img {
    ${getSizeStyles};
  }
`;

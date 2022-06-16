import styled from 'styled-components';
import { anyPropsAttrs, getBgdColor, getPositionStyles } from 'helpers';

export const StyledAvatarGroup = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  ${getPositionStyles};

  & > div[data-el="avatar"] {
    border: 3px solid ${getBgdColor};
  }

  & > div[data-el="avatar"]:not(:first-child) {
    margin-left: -12px;
  }
`;

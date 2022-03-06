import styled from 'styled-components';
import { getErrorFontColor } from 'helpers/styled-helpers';

export const StyledLabel = styled.label`
  margin-left: 20px;
  margin-bottom: 6px;
  color: ${({ theme, disabled }) => (
    disabled ? theme.colors.FONT_SHADE : theme.colors.FONT
  )};
  transition: all 150ms linear;

  & > sup {
    padding-left: 4px;
    color: ${getErrorFontColor};
  }
`;

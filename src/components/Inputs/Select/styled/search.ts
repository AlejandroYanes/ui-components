import styled from 'styled-components';
import { getBrandFontColor, getFontColor } from 'helpers';

export const StyledSearch = styled.input`
  border: none;
  padding: 0 0 0 8px;
  margin: 0;
  width: 100%;
  color: ${getFontColor};
  border-bottom: 1px solid transparent;
  background-color: transparent;
  font-family: Comfortaa, sans-serif;
  font-size: 16px;
  height: 29px;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${getBrandFontColor};
  }
`;

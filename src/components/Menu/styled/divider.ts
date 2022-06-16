import styled from 'styled-components';
import { getFontShadeColor } from 'helpers';

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  margin: 0 auto;
  background-color: ${getFontShadeColor};
`;

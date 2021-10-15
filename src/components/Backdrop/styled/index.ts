import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { getShade } from 'helpers';

export const StyledBackdrop = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${ZLevels.backdrop};
  background-color: ${({ theme }) => getShade(theme.colors.GRAY_DARK, 0.4)};
  backdrop-filter: blur(2px);
`;

export const Container = styled.div``;

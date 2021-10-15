import styled from 'styled-components';

const outerSize = 280;

export const StyledClock = styled.div`
  height: ${outerSize}px;
  width: ${outerSize}px;
  position: relative;
`;

export const OuterRing = styled.div`
  height: ${outerSize}px;
  width: ${outerSize}px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TimeLabel = styled.div`
  position: absolute;
  padding: 6px;
  font-size: 26px;
  top: 0;
  bottom: 0;
  margin: auto 25%;
  height: 40px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.FONT};
  display: flex;
  align-items: center;
  justify-content: center;
`;

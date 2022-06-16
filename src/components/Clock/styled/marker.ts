import styled from 'styled-components';

const markerSize = 36;

export const getActiveStyles = (props) => {
  const { active, theme } = props;

  if (active) {
    return `
      background-color: ${theme.colors.BRAND};
      color: ${theme.colors.WHITE};
    `;
  }
  
  return `
    background-color: transparent;
    color: ${theme.colors.FONT};
  `;
};

export const Marker = styled.button`
  outline: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.FONT};
  height: ${markerSize}px;
  width: ${markerSize}px;
  font-size: ${markerSize / 2}px;
  line-height: ${markerSize}px;
  cursor: pointer;
  ${getActiveStyles};
  transition: all 150ms linear;

  &:active {
    background-color: ${({ theme }) => theme.colors.BRAND};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;

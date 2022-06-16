import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  & li {
    margin: 0 12px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

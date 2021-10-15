import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-content: stretch;
  padding: 6px;
  box-sizing: border-box;
`;

export const Month = styled.li.attrs(anyPropsAttrs)`
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  cursor: default;
  margin: 0 8px;
  font-size: ${({ small }) => small ? '10px' : '14px'};
  line-height: 16px;
  height: 48px;
  color: ${({ theme }) => theme.colors.FONT_SECONDARY};
`;

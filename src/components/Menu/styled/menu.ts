import styled from 'styled-components';
import { anyPropsAttrs, getBgdColor } from 'helpers';
import { Layout } from 'components/base-components/Configuration';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TriggerContainer = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
`;

const menuListStyleMap = {
  [Layout.DESKTOP]: 'width: 400px;',
  [Layout.TABLET]: 'width: 400px;',
  [Layout.MOBILE]: 'width: 90vw',
};

export const MenuList = styled.ul.attrs(anyPropsAttrs)`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 16px;
  background-color: ${getBgdColor};
  ${({ layout }) => menuListStyleMap[layout]};
`;

import React, { FunctionComponent } from 'react';
import {
  MenuItem as StyledMenuItem,
  MenuLink as StyledMenuLink,
} from './styled/menu-item';
import { useMenuContext } from './context';

interface Props {
  id?: string;
  label: string;
  to: string;
  danger?: boolean;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { id, label, danger, to } = props;
  const { closeMenu } = useMenuContext();

  return (
    <StyledMenuItem
      data-el="menu-link"
      data-id={id}
      danger={danger}
    >
      <StyledMenuLink to={to} onClick={closeMenu}>
        <span data-el="menu-link-label">{label}</span>
      </StyledMenuLink>
    </StyledMenuItem>
  );
};

export default MenuItem;

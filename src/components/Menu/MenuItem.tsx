import React, { FunctionComponent, useCallback } from 'react';
import { MenuItem as StyledMenuItem } from './styled/menu-item';
import { useMenuContext } from './context';

interface Props {
  id?: string;
  label: string;
  onClick: (event) => void;
  danger?: boolean;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { id, label, danger, onClick } = props;
  const { closeMenu } = useMenuContext();

  const handleClick = useCallback((event) => {
    onClick(event);
    closeMenu();
  }, [onClick, closeMenu]);

  return (
    <StyledMenuItem
      data-el="menu-item"
      data-id={id}
      role="button"
      danger={danger}
      onClick={handleClick}
    >
      <span data-el="menu-link-label">{label}</span>
    </StyledMenuItem>
  );
};

export default MenuItem;

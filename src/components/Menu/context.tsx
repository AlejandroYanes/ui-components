import React, { FunctionComponent, createContext, useContext } from 'react';

interface MenuContextValue {
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextValue>(undefined);

export const MenuProvider: FunctionComponent<MenuContextValue> = (props) => {
  const { children, ...rest } = props;

  return (
    <MenuContext.Provider value={rest}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);

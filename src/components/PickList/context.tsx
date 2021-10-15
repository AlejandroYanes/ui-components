import React, { createContext, FunctionComponent, useContext, useMemo } from 'react';

interface PickListContext {
  value: string | string[];
  onChange: (value) => void;
  multiple?: boolean;
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
  flatMarker?: boolean;
}

const pickListContext = createContext<PickListContext>(undefined);
const { Provider } = pickListContext;

export const PickListProvider: FunctionComponent<PickListContext> = (props) => {
  const { children, ...rest } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({ ...rest }), Object.values(rest));

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export const usePickListContext = () => useContext<PickListContext>(pickListContext);

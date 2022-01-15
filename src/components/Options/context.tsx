import React, { createContext, FunctionComponent, useContext, useMemo } from 'react';

interface OptionsContext {
  value: any;
  onChange: (value: any) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
  fullWidth?: boolean;
}

const pickListContext = createContext<OptionsContext>(undefined);
const { Provider } = pickListContext;

export const OptionsProvider: FunctionComponent<OptionsContext> = (props) => {
  const { children, ...rest } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({ ...rest }), Object.values(rest));

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export const useOptionsContext = () => useContext<OptionsContext>(pickListContext);

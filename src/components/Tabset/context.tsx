import React, { createContext, FunctionComponent, useMemo } from 'react';

interface TabsetContext {
  activeTab: string;
  onTabChange: (activeTab) => void;
  disableFocus?: boolean;
  fullWidth?: boolean;
}

const tabsetContext = createContext<TabsetContext>(undefined);
const { Provider } = tabsetContext;

export const TabSetProvider: FunctionComponent<TabsetContext> = (props) => {
  const { children, ...rest } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({ ...rest }), Object.values(rest));

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default tabsetContext;

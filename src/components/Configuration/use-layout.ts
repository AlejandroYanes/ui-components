import { useCallback, useEffect, useState } from 'react';
import { Breakpoint, Layout } from './types';

const breakpoints: Breakpoint[] = [
  { layout: Layout.MOBILE, query: '(max-width: 767px)', matches: false },
  { layout: Layout.TABLET, query: '(max-width: 1260px)', matches: false },
  { layout: Layout.DESKTOP, query: '(max-width: 1366px)', matches: false },
];

function getActiveLayout() {
  const matchedBreakpoints = breakpoints.map((bp) => ({
    ...bp,
    matches: window.matchMedia ? window.matchMedia(bp.query).matches : false,
  }));
  const activeLayout = matchedBreakpoints.find((bp) => bp.matches);

  return activeLayout?.layout || Layout.DESKTOP;
}

export default function useLayout() {
  const [layout, setLayout] = useState<Layout>(getActiveLayout);

  const handleQueryMatch = useCallback(() => {
    const nextLayout = getActiveLayout();
    if (nextLayout !== layout) {
      setLayout(nextLayout)
    }
  }, [layout]);

  useEffect(() => {
    if (window.matchMedia) {
      breakpoints.forEach((bp) => (
        window
          .matchMedia(bp.query)
          .addEventListener('change', handleQueryMatch)
      ));
    }
  }, [handleQueryMatch]);

  return layout;
}

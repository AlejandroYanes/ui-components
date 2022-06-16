import { useCallback, useRef } from 'react';

export function useDebounce(countDown) {
  const timerReference = useRef(undefined);

  const debounceCall = useCallback((callback) => {
    if (timerReference.current) {
      clearTimeout(timerReference.current);
      timerReference.current = undefined;
    }
    timerReference.current = setTimeout(callback, countDown);
  }, [countDown]);

  return { timer: timerReference.current, debounceCall };
}

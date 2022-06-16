import { useCallback, useEffect, useState } from 'react';

export function useFocusState(ref) {
  const [isFocused, setIsFocused] = useState(false);

  const activateFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const deActivateFocus = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const component = ref.current;

      component.addEventListener('focusin', activateFocus);
      component.addEventListener('focusout', deActivateFocus);

      return () => {
        component.removeEventListener('focusin', activateFocus);
        component.removeEventListener('focusout', deActivateFocus);
      };
    }
  }, []);

  return isFocused;
}

import { useCallback, useEffect, useMemo, useState } from 'react';

interface HoverOptions {
  offset: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
}

const defaultOptions: HoverOptions = {
  offset: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

function merge<T>(base: T, target: T): T {
  if (!base) {
    return target;
  }

  if (!target) {
    return base;
  }

  return Object.keys(target).reduce((props, k) => {
    if (target[k] === undefined || target[k] === null) {
      return { ...props, [k]: base[k] };
    }

    if (Array.isArray(base[k])) {
      return { ...props, [k]: base[k].conncat(target[k]) };
    }

    if (typeof base[k] === 'object') {
      return { ...props, [k]: merge(base[k], target[k]) };
    }

    return { ...props, [k]: target[k] };
  }, base);
}

export function useHoverState(ref, options?: HoverOptions) {
  const [isHovered, setIsHovered] = useState(false);
  const mergedOptions = useMemo<HoverOptions>(
    () => merge(defaultOptions, options),
    [options],
  );

  const activateHover = useCallback((event) => {
    const { clientX, clientY, target } = event;
    const { top, left, bottom, right } = target.getBoundingClientRect();
    const {
      offset: {
        top: topOffset,
        left: leftOffset,
        bottom: bottomOffset,
        right: rightOffset,
      }
    } = mergedOptions;
    const xIsInsideRage = (
      left + leftOffset <= clientX &&
      right - rightOffset >= clientX
    );
    const yIsInsideRage = (
      top + topOffset <= clientY &&
      bottom - bottomOffset >= clientY
    );

    if (xIsInsideRage && yIsInsideRage) {
      setIsHovered(true);
    }
  }, [mergedOptions]);

  const deactivateHover = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    if (ref.current) {
      const component = ref.current;

      component.addEventListener('mouseenter', activateHover);
      component.addEventListener('mouseleave', deactivateHover);

      return () => {
        component.removeEventListener('mouseenter', activateHover);
        component.removeEventListener('mouseleave', deactivateHover);
      };
    }

    return undefined;
  }, [ref, activateHover, deactivateHover]);

  return isHovered;
}

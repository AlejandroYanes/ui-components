import { MutableRefObject } from 'react';

interface TrayData {
  showSearch: boolean;
  optionsCount: number;
  trayRef: MutableRefObject<any>;
  anchorTo: MutableRefObject<any>;
}

const minHeightWithSearch = 226;
const minHeightWithoutSearch = 232;
const maxHeight = 400;

const getSpaceToTop = (
  trayRef: MutableRefObject<any>,
  anchorTo: MutableRefObject<any>,
) => {
  const { top } = trayRef.current.getBoundingClientRect();

  if (anchorTo?.current) {
    const { top: anchorTop } = anchorTo.current.getBoundingClientRect();
    return top - anchorTop;
  }

  return top;
};

const getContainerHeight = (anchorTo: MutableRefObject<any>) => (
  anchorTo?.current
    ? anchorTo.current.getBoundingClientRect().height
    : window.innerHeight
);

const getContentHeight = (optionsCount: number, showSearch: boolean) => (
  (optionsCount * 40) + (showSearch ? 50 : 16) + 16 + 2
);

export const getMinHeight = (showSearch) => (
  showSearch ? minHeightWithSearch : minHeightWithoutSearch
);

export default function getFloatingStyles(data: TrayData) {
  const { showSearch, optionsCount, trayRef, anchorTo } = data;

  const containerHeight = getContainerHeight(anchorTo);
  const contentHeight = getContentHeight(optionsCount, showSearch);
  const spaceToTop = getSpaceToTop(trayRef, anchorTo);
  const spaceToBottom = containerHeight - spaceToTop;
  const needsFixedHeight = contentHeight > spaceToBottom;
  let floatDirection = 'bottom';
  let fixedHeight = 0;

  if (needsFixedHeight) {
    fixedHeight = Math.min(spaceToBottom - 8, maxHeight);
    const minHeight = getMinHeight(showSearch);
    const shouldFloatTop = fixedHeight < minHeight;

    if (shouldFloatTop) {
      const maxScreenHeight = spaceToTop - 16 - 48;

      fixedHeight = Math.min(contentHeight, maxScreenHeight, maxHeight);
      floatDirection = 'top';
    }
  }

  return { height: fixedHeight, float: floatDirection };
}

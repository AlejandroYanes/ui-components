import isEqual from 'lodash/isEqual';
// TODO: check if by not using this lodash the bundle size is reduced

export function arePropsEqual(propList) {
  return (prevProps, nextProps) => {
    const obj1 = {};
    const obj2 = {};
    propList.forEach((prop) => {
      obj1[prop] = prevProps[prop];
      obj2[prop] = nextProps[prop];
    });

    return isEqual(obj1, obj2);
  };
}

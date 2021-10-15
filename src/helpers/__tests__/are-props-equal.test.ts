import { arePropsEqual } from '../are-props-equal';

describe('arePropsEqual function', () => {
  // eslint-disable-next-line max-len
  it('should return a function that compares to object based on the props passes in the list', () => {
    const prevProps = {
      prop1: 'props1',
      prop2: 2,
      unWantedProp: 'unWantedProp',
      func: () => undefined,
    };

    const nextProps = {
      prop1: 'props1',
      prop2: 2,
      unWantedProp: 'unWantedProp-v2',
      func: () => 0,
    };
    const props = ['prop1', 'prop2'];
    const resultingFunction = arePropsEqual(props);
    expect(resultingFunction(prevProps, nextProps)).toBe(true);
  });
});

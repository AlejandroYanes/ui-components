import { getEventValue } from '../events';

const formatter = new Intl.DateTimeFormat('default', {
  month: 'long',
  year: 'numeric',
});

describe('getEventValue util function', () => {
  it('should return the value in the checked property', () => {
    let value = getEventValue({ checked: false });
    expect(value).toBe(false);
    value = getEventValue({ checked: true });
    expect(value).toBe(true);
  });

  it('should return the value in the formattedValue property', () => {
    const value = getEventValue({ formattedValue: formatter.format(new Date()) });
    expect(value).toBe(formatter.format(new Date()));
  });

  it('should return the value in the value property', () => {
    const value = getEventValue({ value: 2345 });
    expect(value).toBe(2345);
  });

  it('should return the value in the target property', () => {
    const value = getEventValue({ target: { value: '2345' } });
    expect(value).toBe('2345');
  });
});

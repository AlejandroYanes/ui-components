import { generateUID } from '../generators';

describe('generateUID function', () => {
  it('should return a random uid value', () => {
    const firstTry = generateUID();
    const secondTry = generateUID();
    const thirdTry = generateUID();

    expect(
      firstTry === secondTry ||
      secondTry === thirdTry ||
      firstTry === thirdTry
    ).toBe(false);
  });
});

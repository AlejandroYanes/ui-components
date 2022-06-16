import { render } from '@testing-library/react';
import Content from '../Content';
const { REACT_APP_API_URL } = process.env
const src = `${REACT_APP_API_URL}/avatar`;

describe('Avatar base component - Content', () => {
  it('should return an image with the src and alt set if the src is an url', async() => {
    const { queryByAltText } = render(
      <Content
        src={src}
        alt="test user"
      />
    );
    const img = await queryByAltText('test user');
    expect(img).toBeInTheDocument();
  });

  it('should return an svg if the src is not an url', async() => {
    const { queryByAltText, findByTestId } = render(
      <Content
        src="user1"
        alt="test user"
      />
    );

    const img = await queryByAltText('test user');
    expect(img).not.toBeInTheDocument();

    const svg = await findByTestId('svg-user');
    expect(svg).toBeInTheDocument();
  });
});

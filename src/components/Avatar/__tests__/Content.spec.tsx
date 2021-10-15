import { mount } from 'enzyme';
import Content from '../Content';
const { REACT_APP_API_URL } = process.env
const src = `${REACT_APP_API_URL}/avatar`;

describe('Avatar base component - Content', () => {
  it('should return an image with the src and alt set if the src is an url', () => {
    const component = mount(
      <Content
        src={src}
        alt="test user"
      />
    );

    expect(component.find('img').exists()).toBe(true);

    const imageProps = component.find('img').props();

    expect(imageProps.src).toBe(src);
    expect(imageProps.alt).toBe('test user');
  });

  it('should return an svg if the src is not an url', () => {
    const component = mount(
      <Content
        src="user1"
        alt="test user"
      />
    );

    expect(component.find('img').exists()).toBe(false);
    expect(component.find('svg').exists()).toBe(true);
  });
});

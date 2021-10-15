import { mount } from 'enzyme';
import RenderIf from '../index';

describe('RenderIf base component', () => {
  it('should show the content if the condition is true', () => {
    const component = mount(
      <RenderIf condition={true}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );

    const content = component.find('span[data-el="render_if-content"]').text();
    expect(content).toBe('content');
  });

  it('should not show the content if the condition is false', () => {
    const component = mount(
      <RenderIf condition={false}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );

    const content = component.find('span[data-el="render_if-content"]');
    expect(content.exists()).toBe(false);
  });

  it('should show the fallback if the condition is false', () => {
    const fallback = (
      <span data-el="render_if-fallback">fallback content</span>
    );
    const component = mount(
      <RenderIf condition={false} fallback={fallback}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );

    const content = component.find('span[data-el="render_if-fallback"]').text();
    expect(content).toBe('fallback content');
  });
});

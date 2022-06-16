import { render } from '@testing-library/react';
import RenderIf from '../index';

describe('RenderIf base component', () => {
  it('should show the content if the condition is true', async () => {
    const { findByText } = render(
      <RenderIf condition={true}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );
    const content = await findByText('content');
    expect(content).toBeInTheDocument();
  });

  it('should not show the content if the condition is false', async () => {
    const { queryByText } = render(
      <RenderIf condition={false}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );
    const content = await queryByText('content');
    expect(content).not.toBeInTheDocument();
  });

  it('should show the fallback if the condition is false', async() => {
    const fallback = (
      <span data-el="render_if-fallback">fallback content</span>
    );
    const { findByText, queryByText } = render(
      <RenderIf condition={false} fallback={fallback}>
        <span data-el="render_if-content">content</span>
      </RenderIf>
    );

    const contentNode = await queryByText('content');
    const fallbackNode = await findByText('fallback content');

    expect(contentNode).not.toBeInTheDocument();
    expect(fallbackNode).toBeInTheDocument();
  });
});

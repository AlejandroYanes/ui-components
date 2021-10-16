/* eslint-disable max-len */
import { fireEvent, render } from '@testing-library/react';
import TestWrapper from 'components/TestWrapper';
import Button from '../Button';

const onClickMock = jest.fn();

describe('Button component', () => {
  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('should show the label and call the passed onClick function when clicked', async () => {
    const { findByTestId } = render(
      <TestWrapper
        component={Button}
        label="test"
        onClick={onClickMock}
      />
    );

    const button = await findByTestId('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('test')
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should show a loader and not call the passed onClick function when clicked if loading', async () => {
    const { findByTestId } = render(
      <TestWrapper
        component={Button}
        onClick={onClickMock}
        label="test"
        loading
      />
    );
    const button = await findByTestId('button');
    const loadingLayer = await findByTestId('button-loading');
    fireEvent.click(button);

    expect(loadingLayer).toBeInTheDocument();
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should not call the passed onClick function when clicked if disabled', async () => {
    const { findByTestId, queryByTestId } = render(
      <TestWrapper
        component={Button}
        onClick={onClickMock}
        label="test"
        disabled
      />
    );

    const button = await findByTestId('button');
    const loadingLayer = await queryByTestId('button-loading');
    fireEvent.click(button);

    expect(loadingLayer).not.toBeInTheDocument();
    expect(onClickMock).not.toHaveBeenCalled();
  });
});

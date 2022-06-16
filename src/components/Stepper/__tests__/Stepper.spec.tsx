import { fireEvent, render } from '@testing-library/react';
import TestWrapper from 'components/TestWrapper';
import { Text } from 'components/Typography';
import Stepper from '../index';

const onChangeMock = jest.fn();

describe('Stepper base component', () => {
  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it('should render the content of the active step', async() => {
    const { findByTestId } = render(
      <TestWrapper component={Stepper} activeStep={1} onChange={onChangeMock}>
        <Text>content 1</Text>
        <Text>content 2</Text>
        <Text>content 3</Text>
      </TestWrapper>
    );
    const content = await findByTestId('stepper-content');
    expect(content).toHaveTextContent('content 2');
  });

  it('should render the content of the active step when the step changes', async () => {
    const { findByTestId, rerender } = render(
      <TestWrapper component={Stepper} activeStep={1} onChange={onChangeMock}>
        <Text>content 1</Text>
        <Text>content 2</Text>
        <Text>content 3</Text>
      </TestWrapper>
    );

    const firstContent = (await findByTestId('stepper-content')).textContent;
    const step2 = await findByTestId('stepper-step-2');
    fireEvent.click(step2);

    rerender(
      <TestWrapper component={Stepper} activeStep={2} onChange={onChangeMock}>
        <Text>content 1</Text>
        <Text>content 2</Text>
        <Text>content 3</Text>
      </TestWrapper>
    );

    const updatedContent = (await findByTestId('stepper-content')).textContent;

    expect(onChangeMock).toHaveBeenCalledWith(2);
    expect(firstContent).not.toBe(updatedContent);
    expect(updatedContent).toBe('content 3');
  });
});

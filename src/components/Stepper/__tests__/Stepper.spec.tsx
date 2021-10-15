import { mount } from 'enzyme';
import TestWrapper from 'components/base-components/TestWrapper';
import { Text } from 'components/base-components/Typography';
import Stepper from '../index';

const onChangeMock = jest.fn();

describe('Stepper base component', () => {
  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it('should render the content of the active step', () => {
    const stepper = mount(
      <TestWrapper component={Stepper} activeStep={1} onChange={onChangeMock}>
        <Text>content 1</Text>
        <Text>content 2</Text>
        <Text>content 3</Text>
      </TestWrapper>
    );

    const content = stepper.find('main[data-el="stepper-content"]').text();
    expect(content).toBe('content 2');
  });

  it('should render the content of the active step when the step changes', () => {
    const stepper = mount(
      <TestWrapper component={Stepper} activeStep={1} onChange={onChangeMock}>
        <Text>content 1</Text>
        <Text>content 2</Text>
        <Text>content 3</Text>
      </TestWrapper>
    );

    const firstContent = stepper.find('main[data-el="stepper-content"]').text();
    stepper.find('button[data-el="stepper-step-2"]').simulate('click');
    stepper.setProps({ activeStep: 0 });
    const updatedContent = stepper.find('main[data-el="stepper-content"]').text();
    expect(onChangeMock).toHaveBeenCalledWith(2);
    expect(firstContent).not.toBe(updatedContent);
    expect(updatedContent).toBe('content 1');
  });
});

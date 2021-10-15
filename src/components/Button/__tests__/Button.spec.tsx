/* eslint-disable max-len */
import { mount } from 'enzyme';
import TestWrapper from 'components/TestWrapper';
import Button from '../Button';

const onClickMock = jest.fn();

describe('Button component', () => {
  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('should show the label and call the passed onClick function when clicked', () => {
    const component = mount(
      <TestWrapper
        component={Button}
        label="test"
        onClick={onClickMock}
      />
    );

    component.find('button').simulate('click');

    expect(component.find('span[data-el="button-label"]').text()).toBe('test');
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should show a loader and not call the passed onClick function when clicked if loading', () => {
    const component = mount(
      <TestWrapper
        component={Button}
        onClick={onClickMock}
        label="test"
        loading
      />
    );

    component.find('button').simulate('click');

    expect(component.find('div[data-el="loader-spinning-dots"]').exists()).toBe(true);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should not call the passed onClick function when clicked if disabled', () => {
    const component = mount(
      <TestWrapper
        component={Button}
        onClick={onClickMock}
        label="test"
        disabled
      />
    );

    component.find('button').simulate('click');

    expect(component.find('div[data-el="loader-spinning-dots"]').exists()).toBe(false);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});

import TabButton from '@Maplify/component/molecule/TabButton'; // Assuming the component is in the same directory
import { APP_TEXT } from '@Maplify/constant';
import { color } from '@Maplify/theme';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

describe('TabButton Suite', () => {
  const onTabPressMock = jest.fn();

  test('should render button with the correct text', () => {
    const { getByText } = render(
      <TabButton
        text={APP_TEXT.SEARCH_FROM_PLACES}
        isTabActive={false}
        onTabPress={onTabPressMock}
      />,
    );

    // Check if the button text is rendered
    expect(getByText(APP_TEXT.SEARCH_FROM_PLACES)).toBeTruthy();
  });

  test('should call onTabPress when pressed', () => {
    const { getByText } = render(
      <TabButton
        text={APP_TEXT.SEARCH_FROM_PLACES}
        isTabActive={false}
        onTabPress={onTabPressMock}
      />,
    );

    // Simulate press event
    fireEvent.press(getByText(APP_TEXT.SEARCH_FROM_PLACES));

    // Assert that onTabPress was called
    expect(onTabPressMock).toHaveBeenCalled();
    expect(onTabPressMock).toHaveBeenCalledTimes(1);
  });

  test('should apply active styles when isTabActive is true', () => {
    const { getByTestId } = render(
      <TabButton
        text={APP_TEXT.SEARCH_FROM_PLACES}
        isTabActive={true}
        onTabPress={onTabPressMock}
      />,
    );

    // Check if the active styles are applied
    const button = getByTestId('tab-button'); // TouchableOpacity
    const buttonStyle = button?.props.style;

    expect(buttonStyle).toHaveProperty('backgroundColor', color.bg.primary);
  });

  it('should not apply active styles when isTabActive is false', () => {
    const { getByTestId } = render(
      <TabButton text="Search" isTabActive={false} onTabPress={() => {}} />,
    );

    // Check if the non-active styles are applied
    const button = getByTestId('tab-button'); // TouchableOpacityity
    const buttonStyle = button?.props.style;

    // Here you can check if the inactive styles are applied
    expect(buttonStyle).not.toHaveProperty(
      'backgroundColor',
      color.bg.secondary,
    );
  });
});

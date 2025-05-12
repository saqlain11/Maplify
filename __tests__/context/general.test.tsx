import { TABS } from '@Maplify/constant';
import { GeneralContext, GeneralProvider } from '@Maplify/context';
import { googlePlaces } from '@Maplify/service';
import { fireEvent, render } from '@testing-library/react-native';
import React, { useContext } from 'react';
import { Button, Text } from 'react-native';

jest.mock('@Maplify/service/google', () => ({
  googlePlaces: jest.fn(),
}));

const TestComponent = () => {
  const { activeTab, setActiveTab, searchSuggestedPlace, setSelectedPlace } =
    useContext(GeneralContext);
  return (
    <>
      <Text testID="active-tab">{activeTab}</Text>
      <Button title="Change Tab" onPress={() => setActiveTab(TABS.HISTORY)} />
      <Button
        title="Search Suggested Places"
        onPress={() => {
          searchSuggestedPlace('cafe');
        }}
      />
      <Button title="Selected" onPress={() => setSelectedPlace(0)} />
    </>
  );
};
describe('General Context', () => {
  test('renders initial state and updates tab', () => {
    const { getByTestId, getByText } = render(
      <GeneralProvider>
        <TestComponent />
      </GeneralProvider>,
    );

    expect(getByTestId('active-tab').props.children).toBe(TABS.SEARCH);

    fireEvent.press(getByText('Change Tab'));
    expect(getByTestId('active-tab').props.children).toBe(TABS.HISTORY);
  });
  test('setSelectedPlace', () => {
    (googlePlaces as jest.Mock).mockResolvedValue([
      { name: 'Mocked Place', place_id: '123' },
    ]);
    const { getByText } = render(
      <GeneralProvider>
        <TestComponent />
      </GeneralProvider>,
    );

    fireEvent.press(getByText('Selected'));
  });
});

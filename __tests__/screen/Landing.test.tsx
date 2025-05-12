import { INITIAL_STATE, TABS } from '@Maplify/constant';
import { GeneralContext } from '@Maplify/context';
import Landing from '@Maplify/screen/Landing';
import { IGeneralContext } from '@Maplify/typing';
import { render } from '@testing-library/react-native';
import React from 'react';
describe('Landing Screen', () => {
  const mockContext: IGeneralContext = {
    ...INITIAL_STATE,
    setActiveTab: jest.fn(),
    setCurrentLocation: jest.fn(),
    setSelectedPlace: jest.fn(),
    searchSuggestedPlace: jest.fn(),
    getHistory: jest.fn(),
  };

  it('should show SearchPlace when activeTab is SEARCH', () => {
    const { getByText } = render(
      <GeneralContext.Provider value={mockContext}>
        <Landing />
      </GeneralContext.Provider>,
    );

    expect(getByText('Search from places')).toBeTruthy();
  });

  it('should show History when activeTab is HISTORY', () => {
    const { getByText } = render(
      <GeneralContext.Provider
        value={{ ...mockContext, activeTab: TABS.HISTORY } as any}>
        <Landing />
      </GeneralContext.Provider>,
    );

    expect(getByText('Search from history')).toBeTruthy();
  });

  it('should show Loader when isSearching is true', () => {
    const { getByTestId } = render(
      <GeneralContext.Provider
        value={{ ...mockContext, isSearching: true } as any}>
        <Landing />
      </GeneralContext.Provider>,
    );
    const p = getByTestId('loader');
    expect(p).toBeTruthy();
  });
});

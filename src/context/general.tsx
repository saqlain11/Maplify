import {
  ACTIONS,
  DEBOUNCE_TIME,
  INITIAL_STATE,
  LS_STORAGE_KEY,
  TABS,
} from '@Maplify/constant';
import { useAsyncStorage } from '@Maplify/hook';
import { generalReducer } from '@Maplify/reducer';
import { googlePlaces } from '@Maplify/service';
import {
  IContextAction,
  IGeneralContext,
  IGeneralState,
} from '@Maplify/typing';
import { GeolocationResponse } from '@react-native-community/geolocation';
import debounce from 'lodash/debounce';
import React, { createContext, RefObject, useReducer, useRef } from 'react';

const GeneralContext = createContext<IGeneralContext>({
  ...INITIAL_STATE,
  setActiveTab: () => {},
  setCurrentLocation: () => {},
  setSelectedPlace: () => {},
  searchSuggestedPlace: () => {},
  getHistory: () => {},
});

const GeneralProvider = ({ children }: { children: React.ReactNode }) => {
  const { getPlacesFromStorage } = useAsyncStorage(LS_STORAGE_KEY);
  const [state, dispatch] = useReducer(generalReducer, INITIAL_STATE);
  let actions: RefObject<IContextAction> = useRef({
    setActiveTab: (tab: TABS) => {
      dispatch({ type: ACTIONS.SET_ACTIVE_TAB, payload: { tab } });
    },

    setCurrentLocation: (currentLocation: GeolocationResponse) => {
      dispatch({
        type: ACTIONS.SET_CURRENT_LOCATION,
        payload: { currentLocation },
      });
    },
    searchSuggestedPlace: debounce(async (searchPlace: string) => {
      if (!searchPlace.length) {
        return;
      }
      dispatch({
        type: ACTIONS.SET_IS_SEARCHING,
        payload: { isSearching: true },
      });
      try {
        const result = await googlePlaces(searchPlace);
        dispatch({
          type: ACTIONS.SET_SUGGESTED_PLACES,
          payload: { suggestedPlaces: result },
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        dispatch({
          type: ACTIONS.SET_IS_SEARCHING,
          payload: { isSearching: false },
        });
      }
    }, DEBOUNCE_TIME),

    setSelectedPlace: (selectedPlaceIndex: number) => {
      dispatch({
        type: ACTIONS.SET_SELECTED_PLACE,
        payload: { selectedPlaceIndex },
      });
    },
    getHistory: async () => {
      try {
        const history = await getPlacesFromStorage();
        dispatch({
          type: ACTIONS.SET_HISTORY,
          payload: { history },
        });
      } catch (error) {
        console.error('Something went wrong', error);
      }
    },
  });
  return (
    <GeneralContext.Provider
      value={{ ...(state as IGeneralState), ...actions.current }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
export { GeneralContext };

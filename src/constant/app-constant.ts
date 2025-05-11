import { IGeneralState } from '@Maplify/typing';
import { GeolocationResponse } from '@react-native-community/geolocation';
import { Region } from 'react-native-maps';

export const DEFAULT_CURRENT_LOCATION: GeolocationResponse = {
  coords: {
    longitude: 0,
    latitude: 0,
    accuracy: 0,
    heading: null,
    speed: null,
    altitudeAccuracy: null,
    altitude: null,
  },
  timestamp: 0,
} as const;

export const DEFAULT_INITIAL_REGION: Region = {
  latitude: 4.1093195,
  longitude: 109.45547499999998,
  longitudeDelta: 0.02,
  latitudeDelta: 0.02,
} as const;

export const API_TIMEOUT = 3000;

export enum TABS {
  SEARCH,
  HISTORY,
}
export const INITIAL_STATE: IGeneralState = {
  activeTab: TABS.SEARCH,
  currentLocation: DEFAULT_CURRENT_LOCATION,
  selectedPlace: {} as any,
  isSearching: false,
  suggestedPlaces: [],
  history: [],
} as const;

export const ACTIONS = {
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  SET_SUGGESTED_PLACES: 'SET_SUGGESTED_PLACES',
  SET_IS_SEARCHING: 'SET_IS_SEARCHING',
  SET_SELECTED_PLACE: 'SET_SELECTED_PLACE',
  SET_HISTORY: 'SET_HISTORY',
} as const;

export const DEBOUNCE_TIME = 500;
export const LS_STORAGE_KEY = 'SEARCH_PLACES';

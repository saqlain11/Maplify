import { TABS } from '@Maplify/constant';
import { GeolocationResponse } from '@react-native-community/geolocation';

export interface IGeneralState {
  activeTab: TABS;
  currentLocation: GeolocationResponse;
  selectedPlace: ISelectedPlace;
  isSearching: boolean;
  suggestedPlaces: IResult[];
  history: ISelectedPlace[];
  animate:boolean
}
interface ILocation {
  lat: number;
  lng: number;
}

interface IViewport {
  northeast: ILocation;
  southwest: ILocation;
}

interface IGeometry {
  location: ILocation;
  viewport: IViewport;
}

export interface IResult {
  business_status: string;
  formatted_address: string;
  geometry: IGeometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  reference: string;
  types: string[];
}

export interface ISuggestedPlaces {
  html_attributions: any[];
  results: IResult[];
  status: string;
}

export interface IDropdownData {
  label: string;
  value: string | number;
}
export interface ISelectedPlace extends IResult {
  selectedPlaceIndex: number;
}

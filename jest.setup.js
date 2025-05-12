jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn().mockImplementation(success =>
    success({
      coords: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    }),
  ),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
}));

jest.mock('@Maplify/hook', () => ({
  useAsyncStorage: () => ({
    getPlacesFromStorage: jest.fn().mockResolvedValue([{ name: 'Place 1' }]),
  }),
}));

jest.mock('react-native-maps', () => {
  const mockMapView = () => {
    return null; // Or you can mock it with a dummy component like <View />
  };

  return {
    __esModule: true,
    default: mockMapView, // Default export of the module
    PROVIDER_GOOGLE: 'google',
    Marker: mockMapView,
    Callout: mockMapView,
    MapView: mockMapView,
    Polyline: mockMapView,
    Circle: mockMapView,
    Polygon: mockMapView,
    // Add any other components you need to mock from react-native-maps
  };
});

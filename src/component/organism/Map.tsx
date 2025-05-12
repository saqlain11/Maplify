/* eslint-disable react-hooks/exhaustive-deps */
import { DEFAULT_INITIAL_REGION } from '@Maplify/constant';
import { GeneralContext } from '@Maplify/context';
import Geolocation from '@react-native-community/geolocation';
import React, { useContext, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from './Map.style';

const Map = () => {
  const mapRef: React.RefObject<MapView> = useRef(null as unknown as MapView);
  const { currentLocation, setCurrentLocation, selectedPlace, animate } =
    useContext(GeneralContext);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCurrentLocation(info);
    });
  }, []);
  useEffect(() => {
    if (!animate) {
      return;
    }
    mapRef.current?.animateToRegion(
      {
        ...DEFAULT_INITIAL_REGION,
        longitude:
          selectedPlace.geometry?.location?.lng ||
          currentLocation?.coords.longitude,
        latitude:
          selectedPlace.geometry?.location?.lat ||
          currentLocation?.coords.latitude,
      },
      1000,
    );
  }, [
    selectedPlace.name,
    currentLocation.coords.latitude,
    currentLocation.coords.longitude,
  ]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={DEFAULT_INITIAL_REGION}
      region={DEFAULT_INITIAL_REGION}
      rotateEnabled
      userLocationPriority="high"
      showsMyLocationButton
      showsUserLocation
      style={mapStyle.container}
      provider={PROVIDER_GOOGLE}>
      <Marker
        coordinate={{
          latitude:
            selectedPlace?.geometry?.location?.lat ||
            currentLocation?.coords.latitude,
          longitude:
            selectedPlace?.geometry?.location?.lng ||
            currentLocation?.coords.longitude,
        }}
        title={selectedPlace?.name}
        description={selectedPlace?.formatted_address}
      />
    </MapView>
  );
};

export default Map;

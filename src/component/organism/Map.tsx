/* eslint-disable react-hooks/exhaustive-deps */
import {DEFAULT_INITIAL_REGION} from '@Maplify/constant';
import {GeneralContext} from '@Maplify/context';
import Geolocation from '@react-native-community/geolocation';
import React, {useCallback, useContext, useEffect, useRef} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from './Map.style';

const Map = () => {
  const mapRef: React.RefObject<MapView> = useRef(null as unknown as MapView);
  const {currentLocation, setCurrentLocation, selectedPlace} =
    useContext(GeneralContext);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setCurrentLocation(info);
    });
  }, []);

  useEffect(() => {
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
      10000,
    );
  }, [selectedPlace.name]);

  const animateToRegion = useCallback(() => {
    mapRef.current?.animateToRegion(
      {
        ...DEFAULT_INITIAL_REGION,
        longitude: currentLocation?.coords.longitude,
        latitude: currentLocation?.coords.latitude,
      },
      10000,
    );
  }, [currentLocation.coords.latitude, currentLocation.coords.longitude]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={DEFAULT_INITIAL_REGION}
      onMapReady={animateToRegion}
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

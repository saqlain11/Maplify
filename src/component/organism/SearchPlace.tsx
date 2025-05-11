/* eslint-disable react-hooks/exhaustive-deps */
import { LS_STORAGE_KEY } from '@Maplify/constant';
import { GeneralContext } from '@Maplify/context';
import { useAsyncStorage } from '@Maplify/hook';
import React, { useContext, useEffect, useMemo } from 'react';
import { Dropdown } from '../molecule';

const SearchPlace = () => {
  const {
    suggestedPlaces,
    selectedPlace,
    setSelectedPlace,
    searchSuggestedPlace,
  } = useContext(GeneralContext);
  const { setPlaceToStorage } = useAsyncStorage(LS_STORAGE_KEY);

  const suggestedPlaceData = useMemo(
    () =>
      suggestedPlaces.map((place, index) => ({
        label: place.name,
        value: index,
      })),
    [suggestedPlaces],
  );
  useEffect(() => {
    if (selectedPlace.name) {
      setPlaceToStorage(selectedPlace);
    }
  }, [selectedPlace.name]);
  return (
    <Dropdown
      data={suggestedPlaceData}
      onChange={setSelectedPlace}
      value={selectedPlace.selectedPlaceIndex}
      onSearch={searchSuggestedPlace}
    />
  );
};

export default SearchPlace;

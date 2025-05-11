import { ISelectedPlace } from '@Maplify/typing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const useAsyncStorage = (key: string) => {
  const getPlacesFromStorage = useCallback(async () => {
    const items = (await AsyncStorage.getItem(key)) || '[]';
    return JSON.parse(items);
  }, [key]);
  const setPlaceToStorage = useCallback(
    async (selectedPlace: ISelectedPlace) => {
      //Get All the items
      const previousItem: ISelectedPlace[] = await getPlacesFromStorage();
      //Check if the new place is already there no need to add a duplicate one
      const duplicateItem = previousItem.filter(
        item => item.name === selectedPlace.name,
      );
      //If current item not in the list add one ✌️
      if (!duplicateItem.length) {
        await AsyncStorage.setItem(
          key,
          JSON.stringify([...previousItem, selectedPlace]),
        );
      }
    },

    [getPlacesFromStorage, key],
  );

  return { getPlacesFromStorage, setPlaceToStorage };
};

export default useAsyncStorage;

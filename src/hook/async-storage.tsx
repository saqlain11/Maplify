import {ISelectedPlace} from '@Maplify/typing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';

const useAsyncStorage = (key: string) => {
  const getPlacesFromStorage = useCallback(async () => {
    const items = (await AsyncStorage.getItem(key)) || '[]';
    return JSON.parse(items);
  }, [key]);
  const setPlaceToStorage = useCallback(
    async (selectedPlace: ISelectedPlace) => {
      const previousItem: ISelectedPlace[] = await getPlacesFromStorage();
      const duplicateItem = previousItem.filter(
        item => item.name === selectedPlace.name,
      );
      if (!duplicateItem.length) {
        await AsyncStorage.setItem(
          key,
          JSON.stringify([...previousItem, selectedPlace]),
        );
      }
    },

    [getPlacesFromStorage, key],
  );

  return {getPlacesFromStorage, setPlaceToStorage};
};

export default useAsyncStorage;

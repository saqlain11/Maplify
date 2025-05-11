import {API_ROUTES} from '@Maplify/constant';
import {ISuggestedPlaces} from '@Maplify/typing';
import {fetcher} from '@Maplify/util';

export const googlePlaces = async (searchedPlace: string) => {
  try {
    const places = await fetcher<ISuggestedPlaces>({
      url: API_ROUTES.GOOGLE_PLACES.replace('SEARCHED_PLACE', searchedPlace),
    });
    return places.results;
  } catch (err) {
    throw err;
  }
};

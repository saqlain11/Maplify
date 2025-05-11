import { API_KEY } from '@env';

export const API_ROUTES = {
  GOOGLE_PLACES: `maps/api/place/textsearch/json?query=SEARCHED_PLACE&key=${API_KEY}`,
} as const;

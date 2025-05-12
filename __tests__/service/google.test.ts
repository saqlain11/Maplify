import { API_ROUTES } from '@Maplify/constant';
import { googlePlaces } from '@Maplify/service/google';
import { fetcher } from '@Maplify/util';

jest.mock('@Maplify/util', () => ({
  fetcher: jest.fn(),
}));

describe('googlePlaces Suite', () => {
  const mockResults = [
    { place_id: '1', name: 'Place One' },
    { place_id: '2', name: 'Place Two' },
  ];

  test('should return results from fetcher', async () => {
    const searchedPlace = 'London';
    const mockedUrl = API_ROUTES.GOOGLE_PLACES.replace(
      'SEARCHED_PLACE',
      searchedPlace,
    );

    (fetcher as jest.Mock).mockResolvedValueOnce({ results: mockResults });

    const result = await googlePlaces(searchedPlace);
    expect(fetcher).toHaveBeenCalledWith({ url: mockedUrl });
    expect(result).toEqual(mockResults);
  });

  test('should throw error if fetcher fails', async () => {
    const error = new Error('Network error');
    (fetcher as jest.Mock).mockRejectedValueOnce(error);

    await expect(googlePlaces('Paris')).rejects.toThrow('Network error');
  });
});

import fetchStrainData, { cleanStrainData } from '../fetchStrainData';
import { mockStrains } from '../__mocks__/fetchStrainData';

jest.mock('../../private/keys', () => () => undefined);

describe('fetchStrainData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({})
      });
    });
  });

  it('calls fetch with the correct params', async () => {
    const url = 'http://strainapi.evanbusse.com/undefined/strains/search/all';

    expect(window.fetch).not.toHaveBeenCalled();
    await fetchStrainData(url);
    
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', () => {
    expect(fetchStrainData()).resolves.toEqual([]);
  });

  it('handles error if response.ok is false', async () => {
    const mockError = new Error('Network request failed. (error: 500)');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
      });
    });

    expect(fetchStrainData()).rejects.toEqual(mockError);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = new Error('Network request failed. (error: mock error)');

    await expect(fetchStrainData()).rejects.toEqual(expected);
  });
});

describe('cleanStrainData', () => {
  it('returns cleanStrainData', () => {
    const expected = [
      {
        id: 1,
        race: 'hybrid',
        flavors: ["Earthy", "Chemical", "Pine"],
        effects: { 
          "medical": ["Depression", "Insomnia", "Pain", "Stress", "Lack of Appetite"],
          "negative": ["Dizzy"],
          "positive": ["Relaxed", "Hungry", "Happy", "Sleepy"] },
        name: 'Afpak',
      }
    ];

    const result = cleanStrainData(mockStrains);

    expect(result).toEqual(expected);
  });
});


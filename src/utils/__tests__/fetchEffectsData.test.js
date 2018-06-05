import fetchEffectsData, { sortedEffects } from  '../fetchEffectsData';
import { mockEffects } from '../__mocks__/fetchEffectsData';

jest.mock('../../private/keys', () => () => undefined);

describe('fetchEffectsData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve([])
      });
    });
  });

  it('calls fetch with the correct params', async () => {
    const url = 'http://strainapi.evanbusse.com/undefined/searchdata/effects';
    
    expect(window.fetch).not.toHaveBeenCalled();
    await fetchEffectsData(url);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', () => {
    let expected = { "medical": [], "negative": [], "positive": [] };

    expect(fetchEffectsData()).resolves.toEqual(expected);
  });

  it('handles errors if response.ok is false', async () => {
    const mockError = new Error('Network request failed. (error: 500)');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
      });
    });

    expect(fetchEffectsData()).rejects.toEqual(mockError);
  });

  it('throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = new Error('Network request failed. (error: mock error)');
    
    await expect(fetchEffectsData()).rejects.toEqual(expected);
  });

  describe('sortedEffects', () => {
    it('returns sorted effects', () => {
      const expected = {
        positive: ["Relaxed", "Hungry", "Euphoric", "Happy"],
        medical: ["Depression"],
        negative: ["Dizzy"],
      };

      const result = sortedEffects(mockEffects);

      expect(result).toEqual(expected);
    });
  });
});
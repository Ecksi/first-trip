import fetchEffectsData from  '../fetchEffectsData';

describe('fetchEffectsData', () => {
  let mockEffectResults;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ effects: {} })
      });
    });
  });

  it('calls fetch with the correct params', async () => {
    const url = 'http://strainapi.com/effects';
    await fetchEffectsData(url);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', async() => {
    await expect(fetchEffectsData()).resolves.toEqual([{ effects: "positive" }]);
  });

  it('throws an error if response.ok is false', async () => {
    const mockError = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ effects: 'positive'})
      });

      expect(window.fetch).toEqual(mockError);
    });
  });

  it('throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = ('Error: Network request failed. (error: mock error)');
    
    await expect(fetchEffectsData()).rejects.toEqual(expected);
  });

  describe('sortedEffects', () => {
    // it('returns sorted effects', () => {
    //   const mockSortedResults = {
    //     positive: [],
    //     medical: [],
    //     negative: [],
    //   };
    // });
  });
});
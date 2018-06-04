import fetchStrainData from '../fetchStrainData';

describe('fetchStrainData', () => {
  let mockStrainResults;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ strainData: {} })
      }));
  });

  it('calls fetch with the correct params', async () => {
    const url = 'http://strainapi.com';
    await fetchStrainData(url);
    
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', async () => {
    await expect(fetchStrainData()).resolves.toEqual([{ "name": "strainData" }]);
  });

  it('throws an error if response.ok is false', async () => {
    const mockError = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ strainData: 'why tho'})
      });
    });

    expect(window.fetch).toEqual(mockError);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = ('Error: Network request failed. (error: mock error)');

    await expect(fetchStrainData()).rejects.toEqual(expected);
  });
});

describe('cleanStrainData', () => {
  // it('returns clean strain data', () => {
  //   const mockCleanStrainData = [
  //     {
  //       id: 1,
  //       race: 'hybrid',
  //       flavors: [],
  //       effects: {},
  //       name: 'bluesky',
  //     }
  //   ];
  // });
});


import { doFetch } from '../doFetch';

describe('doFetch', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ strainData: 'why tho' })
      })
    );
  });

  it('calls fetch with correct params', async () => {
    const url = 'www.wow.com';
    const options = {};

    await doFetch(url, options);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('returns response data if response.ok is true', async () => {
    await expect(doFetch()).resolves.toEqual({strainData: 'why tho'});
  });

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ strainData: 'why tho'})
      });
    });
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(doFetch()).rejects.toEqual(expected);
  });
});
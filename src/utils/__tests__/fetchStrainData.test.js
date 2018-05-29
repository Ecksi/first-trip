import fetchStrainData from '../fetchStrainData';
import { doFetch } from '../doFetch';

describe('fetchStrainData', () => {
  let mockStrainResults;

  beforeEach(() => {
    mockStrainResults = {
      strain: {
        id: 1,
        race: 'hybrid',
        flavors: [],
        effects: {},
      }
    };
  });

  it('calls doFetch', async () => {

    expect(mockStrainResults).toHaveBeenCalledTimes(1);
  });

  it('calls cleanStrainData', () => {
   
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


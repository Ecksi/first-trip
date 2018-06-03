import fetchEffectsData from  '../fetchEffectsData';
import { doFetch } from '../doFetch';

describe('fetchEffectsData', () => {
  let mockEffectResults;

  beforeEach(() => {
    mockEffectsResults = [
      {
        "effect": "Relaxed",
        "type": "positive"
      }
    ];
  });

  it('calls doFetch', async () => {
    expect(mockEffectResults).toHaveBeenCalledTimes(1);
  });
});
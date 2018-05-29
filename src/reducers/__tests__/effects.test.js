import effectsReducer from '../effects';

describe('effectsReducer', () => {
  it('should return a default state', () => {
    let expected = {};

    expect(effectsReducer(undefined, {})).toEqual(expected);
  });
});
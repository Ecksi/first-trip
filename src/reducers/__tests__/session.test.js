import sessionReducer from '../session';

describe('sessionReducer', () => {
  it('returns a default state', () => {
    let expected = { "authUser": null };

    expect(sessionReducer(undefined, {})).toEqual(expected);
  });
});

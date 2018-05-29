import userReducer from '../user';

describe('userReducer', () => {
  it('should return a default state', () => {
    let expected = { "users": {} };

    expect(userReducer(undefined, {})).toEqual(expected)
  });
});
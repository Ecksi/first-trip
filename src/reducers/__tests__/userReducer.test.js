import userReducer from '../userReducer';
import * as actions from '../../actions';

describe('userReducer', () => {
  it('returns a default state', () => {
    let expected = { "users": {} };

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  // it('returns a new state when called with the USERS_SET action', () => {


  //   expect(userReducer(undefined, actions.)).toEqual(true);
  // });
});

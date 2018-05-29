import filtersReducer from '../filters';
import * as actions from  '../../actions';

describe('filtersReducer', () => {
  it('returns a default state', () => {
    let expected = [];

    expect(filtersReducer(undefined, {})).toEqual(expected);
  });

  it('returns a new state when called with ADD_FILTER action', () => {
    let filters = 'happy';
    let expected = ['happy'];

    expect(filtersReducer(undefined, actions.addFilter(filters))).toEqual(expected);
  });
});

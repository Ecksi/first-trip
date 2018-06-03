import filtersReducer from '../filtersReducer';
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

  it('returns a new state when called with RESET_FILTER action', () => {
    let expected = [];

    expect(filtersReducer(undefined, actions.resetFilter())).toEqual(expected);
  });

  it('returns a new state when called with REMOVE_FILTER action', () => {
    let filters = ['happy', 'hungry', 'relaxed'];
    let expected = ['happy', 'relaxed'];

    expect(filtersReducer(filters, actions.removeFilter('hungry'))).toEqual(expected);
  });
});

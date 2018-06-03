import searchResultsReducer from '../searchResultsReducer';
import * as actions from  '../../actions';

describe('searchResultsReducer', () => {
  it('returns a default state', () => {
    let expected = [];

    expect(searchResultsReducer(undefined, [])).toEqual(expected);
  });

  it('returns a new state when called with SEARCH_RESULTS action', () => {
    let results = [{name: 'bango', type:  'sativa', effects: {}, flavors: []}];
    let expected = results;

    expect(searchResultsReducer(undefined, actions.searchResults(results))).toEqual(expected);
  });

  it.skip('returns a new state when called with SEARCH_BY_FILTERS action', () => {
    let effectType = 'positive';
    let filters = ['happy'];
    let strains = [
      { name: 'bingo', effects: {positive: ['happy']} },
      { name: 'bango', effects: {positive: ['happy', 'giggly']} },
      { name: 'bongo', effects: { positive: ['Euphoric']} }];
    let expected = [
      { name: 'bingo', effects: { positive: ['happy']} },
      { name: 'bango', effects: { positive: ['happy', 'giggly']} }];

    expect(searchResultsReducer(undefined, actions.searchByFilters(effectType, filters, strains))).toEqual(expected);
  });
});
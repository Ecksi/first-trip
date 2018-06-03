import { 
  addStrains,
  addEffects,
  addFilter,
  resetFilter,
  removeFilter,
  searchResults,
  searchByFilters } from '../index';

describe('actions', () => {
  describe('addStrains', () => {
    it('has a type of ADD_STRAINS', () => {
      let strains = [];
      let actual = addStrains(strains);
      let expected = {
        type: 'ADD_STRAINS',
        strains
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('addEffects', () => {
    it('has a type of ADD_EFFECTS', () => {
      let effects = {};
      let actual = addEffects(effects);
      let expected = {
        type: 'ADD_EFFECTS',
        effects
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('addFilter', () => {
    it('has a type of ADD_FILTER', () => {
      let filters = [];
      let actual = addFilter(filters);
      let expected = {
        type: 'ADD_FILTER',
        filters
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('resetFilter', () => {
    it('has a type of RESET_FILTER', () => {
      let actual = resetFilter();
      let expected = {
        type: 'RESET_FILTER'
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('removeFilter', () => {
    it('has a type of REMOVE_FILTER', () => {
      let filter = 'some effect';
      let actual = removeFilter(filter);
      let expected = {
        type: 'REMOVE_FILTER',
        filter
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('searchResults', () => {
    it('has a type of SEARCH_RESULTS', () => {
      let results = [];
      let actual = searchResults(results);
      let expected = {
        type: 'SEARCH_RESULTS',
        results
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('searchByFilters', () => {
    it('has a type of SEARCH_BY_FILTERS', () => {
      let effectType = 'positive';
      let filters = [];
      let strains = [];
      let actual = searchByFilters(effectType, filters, strains);
      let expected = {
        type: 'SEARCH_BY_FILTERS',
        effectType,
        filters,
        strains
      };

      expect(actual).toEqual(expected);
    });
  });
});
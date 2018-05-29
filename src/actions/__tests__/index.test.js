import { addStrains, addEffects, addFilter } from '../index';

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
});
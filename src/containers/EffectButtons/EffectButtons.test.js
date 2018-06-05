import React from 'react';
import { shallow } from 'enzyme';
import { EffectButtons, mapStateToProps, mapDispatchToProps } from './index';
import fetchStrainData from '../../utils/fetchStrainData';
import fetchEffectsData, { mockEffects } from '../../utils/fetchEffectsData';

jest.mock('../../utils/fetchStrainData');
jest.mock('../../utils/fetchEffectsData');

describe('EffectButtons', () => {
  let effectButtons;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      addStrains: jest.fn(),
      addEffects: jest.fn(),
      name: 'weed',
      strains: [{ name: 'weed' }],
      race: 'sativa',
      effects: {type: {positive: 'happy'}},
      filters: ['happy'],
      results: [{ name: 'weedTwo' }],
      searchResults: jest.fn(),
      searchByFilters: jest.fn(),
      resetFilter: jest.fn()
    };

    effectButtons = shallow(
      <EffectButtons {...mockProps} />,
      { disableLifecycleMethods: true });
  });

  describe('component', () => {
    it('should match the snapshot', () => {
      expect(effectButtons).toMatchSnapshot();
    });
  });

  describe('getStrainData', () => {
    it('calls fetchStrainData', async () => {
      await effectButtons.instance().getStrainData();
      
      expect(fetchStrainData).toHaveBeenCalled();
    });

    it('adds strains to the store', async () => {
      await effectButtons.instance().getStrainData();

      expect(mockProps.addStrains).toHaveBeenCalledWith(fetchStrainData());
    });
  });

  describe('getStrainEffects', () => {
    it('calls fetchStrainEffects', async () => {
      await effectButtons.instance().getStrainEffects();

      expect(fetchEffectsData).toHaveBeenCalledTimes(1);
    });

    it('adds effects to the store', async () => {
      await effectButtons.instance().getStrainEffects();

      expect(mockProps.addEffects).toHaveBeenCalledWith(mockEffects);
    });
  });

  describe('showEffects', () => {

  });

  describe('filterEvents', () => {

  });

  describe('mapStateToProps', () => {
    it('can access all strains from the store', () => {
      const strains = mockProps.strains;
      const mockState = { strains };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(mockState);
    });
    
    it('can access all effects from the store', () => {
      const effects = mockProps.effects;
      const mockState = { effects };
      const mappedProps = mapStateToProps(mockState);
      const expected = { type: { positive: 'happy' } };

      expect(mappedProps.effects).toEqual(expected);
    });

    it('can access all filters from the store', () => {
      const filters = mockProps.filters;
      const mockState = { filters };
      const mappedProps = mapStateToProps(mockState);
      const expected = ['happy'];

      expect(mappedProps.filters).toEqual(expected);
    });

    it('can access all results from the store', () => {
      const results = mockProps.results;
      const mockState = { results };
      const mappedProps = mapStateToProps(mockState);
      const expected = [{ name: 'weedTwo' }];

      expect(mappedProps.results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls addStrains dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const strains = [{ name: 'weed' }];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_STRAINS',
        strains
      };

      mappedProps.addStrains(strains);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls addEffects dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const effects = { type: { positive: 'happy' } };
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_EFFECTS',
        effects
      };

      mappedProps.addEffects(effects);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls addFilters dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const filters = ['happy'];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_FILTER',
        filters
      };

      mappedProps.addFilters(filters);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls searchResults dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const results = [{ name: 'weedTwo' }];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'SEARCH_RESULTS',
        results
      };

      mappedProps.searchResults(results);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls resetFilter dispatch', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'RESET_FILTER'
      };

      mappedProps.resetFilter();

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { EffectCard, mapStateToProps, mapDispatchToProps } from './index';

describe('EffectCard', () => {
  let effectCard;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      filters: ['happy', 'tired'],
      effect: 'positive',
      addFilters: jest.fn(),
      removeFilter: jest.fn(),
    };

    effectCard = shallow(<EffectCard  {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(effectCard).toMatchSnapshot();
  });

  it('should listen for a click', () => {
    let mockEvent = {'target': { 'name': 'happy' }};
    let expected = 'happy';

    effectCard.instance().handleClick(mockEvent);

    expect(mockProps.removeFilter).toHaveBeenCalledWith(expected);
  });

  describe('mapStateToProps', () => {
    it('can access all filters from the store', () => {
      const filters = mockProps.filters;
      const mockState = { filters };
      const mappedProps = mapStateToProps(mockState);
      const expected = ['happy', 'tired'];

      expect(mappedProps.filters).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls addFilters dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const filters = ['happy', 'tired'];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_FILTER',
        filters
      };

      mappedProps.addFilters(filters);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls removeFilters dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const filter = 'tired';
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'REMOVE_FILTER',
        filter
      };

      mappedProps.removeFilter(filter);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
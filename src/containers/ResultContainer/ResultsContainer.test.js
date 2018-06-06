import React from 'react';
import { shallow } from 'enzyme';
import { ResultContainer } from './index';

describe('ResultsContainer', () => {
  let resultsContainer;
  let mockProps = {
    results: [],
  };

  beforeEach(() => {
    resultsContainer = shallow(<ResultContainer {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(resultsContainer).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { ResultContainer } from './index';

describe('ResultsContainer', () => {
  let resultsContainer;

  beforeEach(() => {
    resultsContainer = shallow(<ResultContainer />);
  });

  it('should match the snapshot', () => {
    expect(resultsContainer).toMatchSnapshot();
  });
});
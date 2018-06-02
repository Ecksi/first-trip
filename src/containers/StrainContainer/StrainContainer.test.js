import React from 'react';
import { shallow } from 'enzyme';
import StrainContainer from './index';

describe('StrainContainer', () => {
  let strainContainer;

  beforeEach(() => {
    strainContainer = shallow(<StrainContainer />);
  });

  it('should match the snapshot', () => {
    expect(strainContainer).toMatchSnapshot();
  });
});
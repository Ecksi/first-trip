import React from 'react';
import { shallow } from 'enzyme';
import StrainCard from './index';

describe('StrainCard', () => {
  let strainCard;

  beforeEach(() => {
    strainCard = shallow(<StrainCard />);
  });

  it('should match the snapshot', () => {
    expect(strainCard).toMatchSnapshot();
  });
});
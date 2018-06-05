import React from 'react';
import { shallow } from 'enzyme';
import { StrainCard } from './index';

describe('StrainCard', () => {
  let strainCard;
  let mockProps = {
    name: 'yoyiyiyo',
    race: 'aintants',
    effects: [1, 2, 3],
    flavors: [1, 2, 3],
  };

  beforeEach(() => {
    strainCard = shallow(<StrainCard {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(strainCard).toMatchSnapshot();
  });
});
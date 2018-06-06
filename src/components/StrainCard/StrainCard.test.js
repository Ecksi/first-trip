import React from 'react';
import { shallow } from 'enzyme';
import { StrainCard } from './index';

describe('StrainCard', () => {
  let strainCard;
  let mockProps; 

  beforeEach(() => {
    mockProps = {
      id: 1,
      name: ['yoyiyiyo'],
      race: 'aintants',
      effects: { 'positive': [1, 2, 3] },
      flavors: [1, 2, 3],
      authUser: {},
    };
    strainCard = shallow(<StrainCard {...mockProps} />);
  });

  it('matchs the snapshot', () => {
    expect(strainCard).toMatchSnapshot();
  });

  it('return all the effects', () => {

  });
});
import React from 'react';
import { shallow } from 'enzyme';
import EffectCard from './index';

describe('EffectCard', () => {
  let effectCard;

  beforeEach(() => {
    effectCard = shallow(<EffectCard />);
  });

  it('should match the snapshot', () => {
    expect(effectCard).toMatchSnapshot();
  });
});
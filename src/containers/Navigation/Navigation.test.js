import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';

describe('Navigation', () => {
  let navigation;

  beforeEach(() => {
    navigation = shallow(<Navigation />);
  });
  
  it('should match the snapshot', () => {
    expect(navigation).toMatchSnapshot();
  });
});
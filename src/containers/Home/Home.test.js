import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

describe('HomePage', () => {
  let homePage;

  beforeEach(() => {
    homePage = shallow(<HomePage />);
  });

  it('should match the snapshot', () => {
    expect(homePage).toMatchSnapshot();
  });
});
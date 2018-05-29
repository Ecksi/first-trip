import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from  './index';

describe('LandingPage', () => {
  let landingPage;

  beforeEach(() => {
    landingPage = shallow(<LandingPage />);
  });

  it('should match the snapshot', () => {
    expect(landingPage).toMatchSnapshot();
  });
});
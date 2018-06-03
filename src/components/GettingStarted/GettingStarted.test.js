import React from 'react';
import { shallow } from 'enzyme';
import GettingStarted from './index';

describe('GettingStarted', () => {
  let gettingStarted;

  beforeEach(() => {
    gettingStarted = shallow(<GettingStarted />);
  });

  it('matches the snapshot', () => {
    expect(gettingStarted).toMatchSnapshot();
  });
});
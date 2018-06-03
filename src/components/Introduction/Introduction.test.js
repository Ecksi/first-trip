import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './index';

describe('Introduction', () => {
  let introduction;

  beforeEach(() => {
    introduction = shallow(<Introduction />);
  });

  it('matches the snapshot',() => {
    expect(introduction).toMatchSnapshot();
  });
});
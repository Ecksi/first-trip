import React from 'react';
import { shallow } from 'enzyme';
import SignOutButton from './index';

describe('SignOutButton', () => {
  let signOutButton;

  beforeEach(() => {
    signOutButton = shallow(<SignOutButton />);
  });

  it('should match the snapshot', () => {
    expect(signOutButton).toMatchSnapshot();
  });
});
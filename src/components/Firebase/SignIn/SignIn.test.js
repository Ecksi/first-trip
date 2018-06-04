import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './index';

describe('SignInForm', () => {
  let signInForm;

  beforeEach(() => {
    signInForm = shallow(<SignInForm />);
  });

  it('should match the snapshot', () => {
    expect(signInForm).toMatchSnapshot();
  });
});
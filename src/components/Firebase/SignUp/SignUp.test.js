import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './index';

describe('SignUpForm', () => {
  let signUpForm;

  beforeEach(() => {
    signUpForm = shallow(<SignUpForm />);
  });

  it('should match the snapshot', () => {
    expect(signUpForm).toMatchSnapshot();
  });
});
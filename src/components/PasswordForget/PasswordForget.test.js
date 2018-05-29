import React from 'react';
import { shallow } from 'enzyme';
import PasswordForgetForm from './index';

describe('PasswordForgetForm', () => {
  let passwordForgetForm;

  beforeEach(() => {
    passwordForgetForm = shallow(<PasswordForgetForm />);
  });

  it('should match the snapshot', () => {
    expect(passwordForgetForm).toMatchSnapshot();
  })
});
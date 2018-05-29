import React from 'react';
import { shallow } from 'enzyme';
import PasswordChangeFrom from './index';

describe('PasswordChangeForm', () => {
  let passwordChangeForm;

  beforeEach(() => {
    passwordChangeForm = shallow(<PasswordChangeFrom />);
  });

  it('should match the snapshot', () => {
    expect(passwordChangeForm).toMatchSnapshot();
  });
});
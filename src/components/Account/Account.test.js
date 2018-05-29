import React from 'react';
import { shallow } from 'enzyme';
import AccountPage from './index';

describe('AccountPage', () => {
  let accountPage;
  beforeEach(() => {
    accountPage = shallow(<AccountPage />);
  });

  it('matches the snapshot', () => {
    expect(accountPage).toMatchSnapshot();
  });
});
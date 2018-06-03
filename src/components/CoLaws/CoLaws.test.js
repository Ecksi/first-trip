import React from 'react';
import { shallow } from 'enzyme';
import CoLaws from './index';

describe('CoLaws', () => {
  let coLaws;

  beforeEach(() => {
    coLaws = shallow(<CoLaws />);
  });

  it('matches the snapshot', () => {
    expect(coLaws).toMatchSnapshot();
  });
});
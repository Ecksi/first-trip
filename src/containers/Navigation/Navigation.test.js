import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './index';

describe('Navigation', () => {
  let navigation;
  let mockProps = {
    authUser: {}
  };

  beforeEach(() => {
    navigation = shallow(<Navigation {...mockProps} />);
  });
  
  it('should match the snapshot', () => {
    expect(navigation).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps, mapDispatchToProps } from './index';

describe('HomePage', () => {
  let homePage;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      onSetUsers: jest.fn()
    };

    homePage = shallow(<HomePage />,
      { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(homePage).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('can access users from the store', () => {
      const setUsers = mockProps.onSetUsers;
      const mockState = { setUsers };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps.setUsers).toEqual(mockState);
    });
  });
});
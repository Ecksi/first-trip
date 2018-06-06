import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOutButton from '../../components/Firebase/SignOut';
import * as routes from '../../constants/routes';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = ({ authUser }) =>
  <div className="Navigation">
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>;

const NavigationAuth = () =>
  <ul className="nav-list">
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.HOME}>Search</Link></li>
    <li><SignOutButton /></li>
  </ul>;

export const NavigationNonAuth = () =>
  <ul className="nav-list">
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>;

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

Navigation.propTypes = {
  authUser: PropTypes.object,
};

export default connect(mapStateToProps)(Navigation);
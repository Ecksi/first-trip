import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PasswordForgetForm } from '../../components/PasswordForget';
import PasswordChangeForm from '../../components/PasswordChange';
import withAuthorization from '../../auth/withAuthorization';
import Navigation from '../Navigation';
import PropTypes from 'prop-types';

const AccountPage = ({ authUser }) =>
  <div>
    <div className="header-background">
      <Navigation />
    </div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>;

export const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = authUser => !!authUser;

AccountPage.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../../auth/withAuthorization';
import Navigation from '../Navigation';

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

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);

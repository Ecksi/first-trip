import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import withAuthentication from '../../auth/withAuthentication';
import * as routes from '../../constants/routes';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import ResultContainer from  '../ResultContainer';

export const App = () => 
  <Router>
    <div>
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route 
        exact path={routes.PASSWORD_FORGET} 
        component={() => <PasswordForgetPage />} 
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
      <Route
        exact path={routes.RESULTS}
        component={() => <ResultContainer />}
      />
    </div>
  </Router>;

export default withAuthentication(App);
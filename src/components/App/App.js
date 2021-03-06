import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import withAuthentication from '../../auth/withAuthentication';
import * as routes from '../../constants/routes';
import LandingPage from '../Landing';
import SignUpPage from '../Firebase/SignUp';
import SignInPage from '../Firebase/SignIn';
import PasswordForgetPage from '../Firebase/PasswordForget';
import HomePage from '../../containers/Home';
import ResultContainer from  '../../containers/ResultContainer';
import FavoritesContainer from '../../containers/FavoritesContainer';
import './App.css';

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
        exact path={routes.RESULTS}
        component={() => <ResultContainer />}
      />
      <Route
        exact path={routes.FAVORITES}
        component={() => <FavoritesContainer />}
      />
    </div>
  </Router>;

export default withAuthentication(App);
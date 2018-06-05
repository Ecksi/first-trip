import React, { Component } from 'react';
import Navigation from '../../../containers/Navigation';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import './PasswordForget.css';

const PasswordForgetPage = () =>
  <div className="pw-forget">
    <div className="header-background">
      <Navigation />
    </div>
    <h1 className="pw-forget-header">Colorado candies make you forget your password?</h1>
    <PasswordForgetForm />
  </div>;

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => 
            this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>;

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
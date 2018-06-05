import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../auth/withAuthorization';
import { db } from '../../firebase';
import Navigation from '../Navigation';
import EffectButtons from '../EffectButtons';
import PropTypes from 'prop-types';

export class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    return (
      <div>
        <div className="header-background">
          <Navigation />
        </div>
        <EffectButtons />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  users: state.userState.users,
});

export const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users})
});

const authCondition = authUser => !!authUser;

HomePage.propTypes = {
  onSetUsers: PropTypes.func.isRequired,
};

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
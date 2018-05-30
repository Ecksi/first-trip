import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../auth/withAuthorization';
import { db } from '../../firebase';
import Navigation from '../Navigation';
import StrainContainer from '../StrainContainer';
import PropTypes from 'prop-types';

class HomePage extends Component {
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
        <p>The Home Page is accessible by every signed in user.</p>
        <StrainContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users})
});

const authCondition = authUser => !!authUser;

HomePage.propTypes = {
  onSetUsers: PropTypes.object.isRequired,
};

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
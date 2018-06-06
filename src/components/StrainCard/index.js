import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { db } from '../../firebase/firebase';
import PropTypes from 'prop-types';
import './StrainCard.css';

export const StrainCard = props => {
  const { id, name, race, effects, flavors } = props;
  const sanitizedRace = race[0].toUpperCase() + race.substring(1);  

  const getEffects = type => {
    return effects[type].map(effect => (
      <li key={shortid.generate()} className="strain-effect">{effect}</li>
    ));
  };

  const getFlavors = () => {
    return flavors.map(flavor => (
      <li key={shortid.generate()} className="strain-effect">{flavor}</li>
    ));
  };

  const addToFavorites = async event => {
    const userId = props.authUser.authUser.uid;
    
    db.ref(`/users/${userId}/favorites`).push({
      strainId: event.target.name,
    });
  };

  return (
    <div className="strain-card">
      <h1>{name}</h1>
      <h3>Type: {sanitizedRace}</h3>
      <h3>Effects:</h3>
      <div className="strain-effects">
        <div>
          <h4>Positive</h4>
          <ul>{getEffects('positive')}</ul>
        </div>
        <div>
          <h4>Medical</h4>
          <ul>{getEffects('medical')}</ul>
        </div>
        <div>
          <h4>Negative</h4>
          <ul>{getEffects('negative')}</ul>
        </div>
      </div>
      <h3>Flavors:</h3>
      <ul className="flavors">{getFlavors()}</ul>
      <div className="add-favorite">
        <button onClick={addToFavorites} name={id}>Add to Favorites</button>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  authUser: state.sessionState,
});

StrainCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.array.isRequired,
  race: PropTypes.string.isRequired,
  effects: PropTypes.object,
  flavors: PropTypes.array,
  authUser: PropTypes.object,
};

export default connect(mapStateToProps)(StrainCard);
import React from 'react';
import './StrainCard.css';
import PropTypes from 'prop-types';

const StrainCard = props => {
  const { name, race, effects, flavors } = props;

  const getEffects = type => {
    return effects[type].map(effect => (
      <li>{effect}</li>
    ));
  };

  const getFlavors = () => {
    return flavors.map(flavor => (
      <li>{flavor}</li>
    ));
  };

  return (
    <div className="strain-card">
      <h1>{name}</h1>
      <h3>Type: {race}</h3>
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
    </div>
  );
};

StrainCard.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  effects: PropTypes.object,
  flavors: PropTypes.array,
};

export default StrainCard;
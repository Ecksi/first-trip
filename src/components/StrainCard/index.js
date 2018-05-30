import React from 'react';
import './StrainCard.css';

const StrainCard = props => {
  const { id, name, race, effects, flavors } = props;

  const getEffects = (type, props) => {
    return effects[type].map(effect => (
      <li>{effect}</li>
    ));
  };

  const getFlavors = props => {
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

export default StrainCard;
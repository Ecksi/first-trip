import React from 'react';

const StrainCard = props => {
  const {
    name,
    race,
    positive,
    medical,
    negative,
    flavors,
    description,
  } = props;
  
  return (
    <div>
      <h1>{name}</h1>
      <h3>{race}</h3>
      <h3>Effects:</h3>
      <p>Positive: {positive}</p>
      <p>Medical: {medical}</p>
      <p>Negative: {negative}</p>
      <h3>{flavors}</h3>
      <p>Description: {description}</p>
    </div>
  );
};

export default StrainCard;
import React from 'react';
import { connect } from 'react-redux';
import StrainCard from '../StrainCard';
import Navigation from '../Navigation';
import './ResultsContainer.css';

const ResultContainer = props => {
  const searchCards = () => {
    return props.results.map(result => (
      <StrainCard
        key={result.id}
        {...result}
      />
    ));
  };

  return (
    <div>
      <div className="header-background">
        <Navigation />
      </div>
      <h2>Your Results</h2>
      <div className="search-container">
        {searchCards()}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps)(ResultContainer);
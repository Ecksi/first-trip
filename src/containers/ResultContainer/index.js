import React from 'react';
import { connect } from 'react-redux';
import StrainCard from '../../components/StrainCard';
import Navigation from '../Navigation';
import './ResultsContainer.css';
import PropTypes from 'prop-types';

export const ResultContainer = props => {
  const searchCards = () => {
    return props.results.map(result => (
      <StrainCard
        key={result.id}
        {...result}
      />
    ));
  };

  return (
    <div className="results-header">
      <div className="header-background">
        <Navigation />
      </div>
      <h1>These are the strains that matched your search filter</h1>
      <div className="search-container">
        {searchCards()}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  results: state.results,
});

ResultContainer.propTypes = {
  results: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ResultContainer);
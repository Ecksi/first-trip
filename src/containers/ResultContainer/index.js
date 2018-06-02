import React from 'react';
import { connect } from 'react-redux';
import StrainCard from '../../components/StrainCard';
import Navigation from '../Navigation';
import './ResultsContainer.css';
import PropTypes from 'prop-types';

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

ResultContainer.propTypes = {
  results: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ResultContainer);
import React from 'react';
import { connect } from 'react-redux';
import { 
  addFavorite,
  removeFavorite,
} from '../../actions';
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
        toggleFavorite={toggleFavorite}
        isFavorite={checkIfFavorited}
      />
    ));
  };

  const checkIfFavorited = strainId =>
    props.favorites.some(favorite => favorite === strainId);

  const addFavorite = strainId => props.addFavorite(strainId);

  const removeFavorite = strainId => props.removeFavorite(strainId);

  const toggleFavorite = strainId =>
    checkIfFavorited(strainId)
      ? removeFavorite(strainId)
      : addFavorite(strainId);

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
  favorites: state.favorites,
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id)),
});

ResultContainer.propTypes = {
  results: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
import React from 'react';
import { connect } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../actions';
import Navigation from '../../containers/Navigation';
import './FavoritesContainer.css';
import StrainCard from '../../components/StrainCard';

export const FavoritesContainer = props => {
  const getFavoriteStrains = () => 
    props.favorites.map(favorite =>
      props.strains.filter(strain => {
        return strain.id === favorite;
      }));

  const getFavoriteCards = () => {
    const favorites = getFavoriteStrains();

    return favorites.map(favorite => (
      <StrainCard
        key={favorite[0].id}
        {...favorite[0]}
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
    <div className="favorites">
      <div className="header-background">
        <Navigation />
      </div>
      <h1>Your favorite strains are</h1>
      <div className="search-container">
        {getFavoriteCards()}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  strains: state.strains,
  favorites: state.favorites,
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
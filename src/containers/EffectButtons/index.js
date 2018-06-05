import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  withRouter } from 'react-router-dom';
import { 
  addStrains,
  addEffects,
  addFilter,
  resetFilter,
  searchResults,
  loadFavorites } from '../../actions';
import { db } from '../../firebase/firebase';
import fetchStrainData from '../../utils/fetchStrainData';
import fetchEffectsData from '../../utils/fetchEffectsData';
import EffectCard from '../EffectCard';
import PropTypes from 'prop-types';
import './EffectButtons.css';

export class EffectButtons extends Component {
  componentDidMount = () => {
    this.getStrainEffects();
    this.getStrainData();
    this.loadUserFavorites();
  }

  getStrainData = async () => {
    const strainData = await fetchStrainData();
    
    this.props.addStrains(strainData);
  }

  getStrainEffects = async () => {
    const effectsData = await fetchEffectsData();

    this.props.addEffects(effectsData);
  }

  loadUserFavorites = async () => {
    const userId = this.props.authUser.authUser.uid;
    
    let fizz = [];

    await db.ref(`/users/${userId}/favorites/`).once('value', (snapshot) => fizz.push(...Object.values(snapshot.val())));

    const strainIds = fizz.map(thing => thing.strainId);

    this.props.loadFavorites(strainIds);
  }

  showEffects = type => {
    let propEffects = this.props.effects;

    if (this.props.effects[type]) {
      const sortedEffects = propEffects[type].sort();

      return sortedEffects.map((effect, index) => (
        <EffectCard
          key={index}
          effect={effect}
        />
      ));
    }
  }

  filterEffects = event => {
    let searchFilters = this.props.filters;
    let addSearchResults = this.props.searchResults;
    const strains = this.props.strains;
    let name = event.target.name;

    if (this.props.strains.length > 1) {
      let strainsByFiltered = strains.reduce((strainScores, strain) => {
        let score = 0;

        searchFilters.forEach(elem =>
          strain.effects[name].includes(elem) ? score++ : null);

        strainScores[score]
          ? strainScores[score].push(strain)
          : strainScores[score] = [];

        return strainScores;
      }, {});

      const highestMatch = Math.max(...Object.keys(strainsByFiltered));
      const searchResults = strainsByFiltered[highestMatch];

      name === 'negative'
        ? addSearchResults(strainsByFiltered['0'])
        : addSearchResults(searchResults);
    }
    // this.props.searchByFilters(name, searchFilters, strains);
    this.props.resetFilter();
  }

  render() {
    return (
      <div>
        <h1 className="strain-header">Select the effects you would like to have or avoid:</h1>
        <div className="effects">
          <h2>Positive Effects</h2>
          <h2>Medical Effects</h2>
          <h2>Negative Effects</h2>
        </div>
        <div className="effects">
          <ul>
            {this.showEffects('positive')}
          </ul>
          <ul>
            {this.showEffects('medical')}
          </ul>
          <ul>
            {this.showEffects('negative')}
          </ul>
        </div>
        <NavLink to="/results">
          <div className="effects filter-by">
            <button
              className="filter"
              onClick={this.filterEffects}
              name="positive">Filter by Positive
            </button>
            <button
              className="filter"
              onClick={this.filterEffects}
              name="medical">Filter by Medical
            </button>
            <button
              className="filter"
              onClick={this.filterEffects}
              name="negative">Filter by Negative
            </button>
          </div>
        </NavLink>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  strains: state.strains,
  effects: state.effects,
  filters: state.filters,
  results: state.results,
  authUser: state.sessionState,
});

export const mapDispatchToProps = dispatch => ({
  addStrains: strains => dispatch(addStrains(strains)),
  addEffects: effects => dispatch(addEffects(effects)),
  addFilters: filters => dispatch(addFilter(filters)),
  searchResults: results => dispatch(searchResults(results)),
  // searchByFilters: (effectType, filters, strains) =>
  //   dispatch(searchByFilters(effectType, filters, strains)),
  resetFilter: () => dispatch(resetFilter()),
  loadFavorites: favorites => dispatch(loadFavorites(favorites)),
});

EffectButtons.propTypes = {
  addStrains: PropTypes.func.isRequired,
  addEffects: PropTypes.func.isRequired,
  strains: PropTypes.array.isRequired,
  effects: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  searchResults: PropTypes.func.isRequired,
  searchByFilters: PropTypes.func,
  resetFilter: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EffectButtons));
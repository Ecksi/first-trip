import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStrains, addEffects, addFilter } from '../../actions';
import fetchStrainData from '../../utils/fetchStrainData';
import fetchStrainEffects from '../../utils/fetchEffectsData';
import EffectCard from '../EffectCard';
import './StrainContainer.css';

class StrainContainer extends Component {
  componentDidMount = async () => {
    await this.getStrainEffects();
    await this.getStrainData();
  }

  getStrainData = async () => {
    const strainData = await fetchStrainData();

    this.props.addStrains(strainData);
  }

  getStrainEffects = async () =>{
    const effectsData = await fetchStrainEffects();

    this.props.addEffects(effectsData);
  }

  showEffects = effectType => {
    const sortedEffects = this.props.effects[effectType].sort();

    return sortedEffects.map((effect, index) => (
      <EffectCard
        key={index}
        effect={effect}
      />
    ));
  }

  filterEffects = () => {
    let searchFilters = this.props.filters;
    const strains = this.props.strains;

    if (this.props.strains.length > 1) {
      let filteredResults = strains.reduce((strainScores, strain) => {
        let score = 0;

        searchFilters.forEach(elem =>
          strain.effects.positive.includes(elem) ? score++ : null);

        strainScores[score] ? strainScores[score].push(strain) : strainScores[score] = [];

        return strainScores;
      }, {});
      const mostResults = Math.max(...Object.keys(filteredResults));

      return filteredResults[mostResults];
    }
  }

  showPositiveEffects = () => {
    if (this.props.effects.positive) {
      return this.showEffects('positive');
    }
  }

  showMedicalEffects = () => {
    if (this.props.effects.medical) {
      return this.showEffects('medical');
    }
  }

  showNegativeEffects = () => {
    if (this.props.effects.negative) {
      return this.showEffects('negative');
    }
  }

  render() {
    return (
      <div>
        <h1>Hello there </h1>
        <h3>Select the effects you would like to have or avoid:</h3>
        <div className="effects">
          <h2>Positive Effects</h2>
          <h2>Medical Effects</h2>
          <h2>Negative Effects</h2>
        </div>
        <div className="effects">
          <ul>
            {this.showPositiveEffects()}
          </ul>
          <ul>
            {this.showMedicalEffects()}
          </ul>
          <ul>
            {this.showNegativeEffects()}
          </ul>
        </div>
        <div className="effects">
          <NavLink to="/results"><button className="filter" onClick={this.filterEffects}>Filter by Positive</button></NavLink>
          <button className="filter">Filter by Medical</button>
          <button className="filter">Filter by Negative</button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  strains: state.strains,
  effects: state.effects,
  filters: state.filters,
});

export const mapDispatchToProps = dispatch => ({
  addStrains: strains => dispatch(addStrains(strains)),
  addEffects: effects => dispatch(addEffects(effects)),
  addFilters: filters => dispatch(addFilter(filters)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StrainContainer));
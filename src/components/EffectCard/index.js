import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFilter, removeFilter } from '../../actions';
import './EffectCard.css';
import PropTypes from 'prop-types';

const EffectCard = props => {
  const handleClick = event => {
    const { name } = event.target;

    props.filters.includes(name)
      ? props.removeFilter(name)
      : props.addFilters(name);
  };

  const selectedFilter = props.filters.includes(props.effect)
    ? "selected" 
    : null;

  return (
    <li className={`effect-button ${selectedFilter}`}>
      <button
        onClick={handleClick}
        name={props.effect}
      >
        {props.effect}
      </button>
    </li>
  );
};

export const mapStateToProps = state => ({
  filters: state.filters,
});

export const mapDispatchToProps = dispatch => ({
  addFilters: filters => dispatch(addFilter(filters)),
  removeFilter: filter => dispatch(removeFilter(filter)),
});

EffectCard.propTypes = {
  filters: PropTypes.array.isRequired,
  effect: PropTypes.string.isRequired,
  addFilters: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EffectCard)
);
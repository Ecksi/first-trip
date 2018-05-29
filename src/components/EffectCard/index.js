import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFilter } from '../../actions';
import './EffectCard.css';

const EffectCard = props => {
  const handleClick = event => {
    const { name } = event.target;

    if (!props.filters.includes(name)) {
      props.addFilters(name);
    }
  };

  const foo = props.filters.includes(props.effect) ? "selected" : null

  return (
    <li className={foo}>
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EffectCard)
);
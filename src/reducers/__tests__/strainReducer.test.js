import strainsReducer from '../strainsReducer';
import * as actions from '../../actions';

describe('strainsReducer', () => {
  it('returns a default state', () => {
    let expected = [];

    expect(strainsReducer(undefined, {})).toEqual(expected);
  });

  it('returns a new state when called with ADD_STRAINS action', () => {
    let strains = [
      { 
        id: 1, 
        race: 'sativa',
        flavors: [],
        effects: {},
      }];
    let expected = strains;

    expect(strainsReducer(undefined, actions.addStrains(strains))).toEqual(expected);
  });
});

import favoritesReducer from '../favoritesReducer';
import * as actions from '../../actions';

describe('favoritesReducer', () => {
  it('returns a default state', () => {
    let expected = [];

    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('returns a new state when called with LOAD_FAVORITES action', () => {
    let favorites = [12];
    let expected = favorites;

    expect(favoritesReducer(undefined, actions.loadFavorites(favorites))).toEqual(expected);
  });
});
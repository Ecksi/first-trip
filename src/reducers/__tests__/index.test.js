import { createStore } from 'redux';
import rootReducer from '../index';
import strainsReducer from '../strains';
import effectsReducer from '../effects';
import filtersReducer from '../filters';

const store = createStore(rootReducer);

describe('rootReducer', () => {
  it('sessionReducer should match the default state given an empty action', () => {
    expect(store.getState().sessionState).toEqual({ "authUser": null });
  });

  it('userReducer should match the default state given an empty action', () => {
    expect(store.getState().userState).toEqual({ "users": {} });
  });

  it('strainsReducer should match the default state given an empty action', () => {
    expect(store.getState().strains).toEqual(strainsReducer([], {}));
  });

  it('effectsReducer should match the default state given an empty action', () => {
    expect(store.getState().effects).toEqual(effectsReducer({}, {}));
  });

  it('filtersReducer should match the default state given an empty action', () => {
    expect(store.getState().effects).toEqual(filtersReducer({}, {}));
  });
});
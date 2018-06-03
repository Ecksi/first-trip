import effectsReducer from '../effectsReducer';
import * as actions from '../../actions';

describe('effectsReducer', () => {
  it('return a default state', () => {
    let expected = {};

    expect(effectsReducer(undefined, {})).toEqual(expected);
  });

  it('returns a new statewhen called with ADD_EFFECTS action', () => {
    let effects = {
      "effect": "Relaxed",
      "type": "positive"
    };
    let expected = effects;

    expect(effectsReducer(undefined, actions.addEffects(effects))).toEqual(expected);
  });
});
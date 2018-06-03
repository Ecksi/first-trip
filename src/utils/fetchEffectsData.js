import { strainKey } from '../private/keys';
import { doFetch } from './doFetch';

const fetchEffectsData = async () => {
  const url = `http://strainapi.evanbusse.com/${strainKey}/searchdata/effects`;
  const effectsData = await doFetch(url);

  return sortedEffects(effectsData);
};

const sortedEffects = dirtyData => {
  return dirtyData.reduce((sortedData, data) => {
    sortedData[data.type].push(data.effect);

    return sortedData;
  }, {
    positive: [],
    medical: [],
    negative: [],
  });
};

export default fetchEffectsData;

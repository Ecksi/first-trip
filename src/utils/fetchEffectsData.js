import { strainKey } from '../private/keys';

const fetchEffectsData = async () => {
  try {
    const url = `http://strainapi.evanbusse.com/${strainKey}/searchdata/effects`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return sortedEffects(await response.json());
  } catch (error) {
    throw new Error(`Network request failed. (error: ${error.message})`);
  }
};

export const sortedEffects = dirtyData => {
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

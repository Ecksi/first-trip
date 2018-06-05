import { strainKey } from '../private/keys';

const fetchStrainData = async () => {
  try {
    const url = `http://strainapi.evanbusse.com/${strainKey}/strains/search/all`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return cleanStrainData(await response.json());
  } catch (error) {
    throw new Error(`Network request failed. (error: ${error.message})`);
  }
};

export const cleanStrainData = dirtyData => {
  const strainNames = Object.keys(dirtyData);
  const strainData = Object.values(dirtyData);
  let cleanStrainData = [];

  for (let index = 0; index < strainData.length; index++) {
    cleanStrainData.push({...strainData[index], name: strainNames[index]});
  }
  
  return cleanStrainData;
};

export default fetchStrainData;

import { strainKey } from '../private/keys';
import { doFetch } from './doFetch';

const fetchStrainData = async () => {
  const url = `http://strainapi.evanbusse.com/${strainKey}/strains/search/all`;
  const strainData = await doFetch(url);

  return cleanStrainData(strainData);
};

const cleanStrainData = dirtyData => {
  const strainNames = Object.keys(dirtyData);
  const strainData = Object.values(dirtyData);
  let cleanStrainData = [];

  for (let i = 0; i < strainData.length; i++) {
    cleanStrainData.push({...strainData[i], name: strainNames[i]});
  }
  
  return cleanStrainData;
};

export default fetchStrainData;

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

  for (let index = 0; index < strainData.length; index++) {
    cleanStrainData.push({...strainData[index], name: strainNames[index]});
  }
  
  return cleanStrainData;
};

export default fetchStrainData;

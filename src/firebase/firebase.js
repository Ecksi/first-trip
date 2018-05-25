import * as firebase from 'firebase';
import { firebaseKey } from '../private/keys';

const config = {
  apiKey: firebaseKey,
  authDomain: "first-ivxx-trip.firebaseapp.com",
  databaseURL: "https://first-ivxx-trip.firebaseio.com",
  projectId: "first-ivxx-trip",
  storageBucket: "first-ivxx-trip.appspot.com",
  messagingSenderId: "630692325084"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
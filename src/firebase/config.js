import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAeRAx5bvdXr2n6ARouXU73vJQLPyU5zZo',
  authDomain: 'photo-gala.firebaseapp.com',
  databaseURL: 'https://photo-gala.firebaseio.com',
  projectId: 'photo-gala',
  storageBucket: 'photo-gala.appspot.com',
  messagingSenderId: '761295238687',
  appId: '1:761295238687:web:c9d2637ca92bd8151b072a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
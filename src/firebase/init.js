import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyACGIoTre-HACfmQVtAHPByleJcBoepu9g',
  authDomain: 'ninja-geo-c0636.firebaseapp.com',
  databaseURL: 'https://ninja-geo-c0636.firebaseio.com',
  projectId: 'ninja-geo-c0636',
  storageBucket: 'ninja-geo-c0636.appspot.com',
  messagingSenderId: '716743471664',
  appId: '1:716743471664:web:f0611d14b14da2dadbb3f5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

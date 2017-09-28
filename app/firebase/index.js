import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    // projectId: 'nip-react-todo-app',
    storageBucket: process.env.STORAGE_BUCKET
    // messagingSenderId: '102391914318'
  };
  firebase.initializeApp(config);
} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;

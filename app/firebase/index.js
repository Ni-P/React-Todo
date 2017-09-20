import firebase from 'firebase';

try {
  var config = {
    apiKey: 'AIzaSyA9VR0tHY-4ufvkFBrPGcsWWD_8zmEEviA',
    authDomain: 'nip-react-todo-app.firebaseapp.com',
    databaseURL: 'https://nip-react-todo-app.firebaseio.com',
    projectId: 'nip-react-todo-app',
    storageBucket: 'nip-react-todo-app.appspot.com',
    messagingSenderId: '102391914318'
  };
  firebase.initializeApp(config);
} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;

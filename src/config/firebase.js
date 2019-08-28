import firebase from 'firebase/app'
import 'firebase/firestore' 


const config = {
    apiKey: "AIzaSyDRaIEgD-rcnYtVxBNUYHekdFPdibXs8qI",
    authDomain: "usuarios-59530.firebaseapp.com",
    databaseURL: "https://usuarios-59530.firebaseio.com",
    projectId: "usuarios-59530",
    storageBucket: "usuarios-59530.appspot.com",
    messagingSenderId: "146908550506",
    appId: "1:146908550506:web:a53cecb12c8e7b4b"
  };
  firebase.initializeApp(config);
  export default firebase;
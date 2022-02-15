import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDf_CAr8iaOFnCiTdgT4hFCgZMx7iMBRLE",
  authDomain: "glowing-spork-301bf.firebaseapp.com",
  projectId: "glowing-spork-301bf",
  storageBucket: "glowing-spork-301bf.appspot.com",
  messagingSenderId: "498475759813",
  appId: "1:498475759813:web:0810c68b580ae1f4ec98ac",
  measurementId: "G-XP0T304R0E"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
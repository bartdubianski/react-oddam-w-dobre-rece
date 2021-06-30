import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAADisEvZmEpLRZ_C4I497SVNwl6Ftgbbw",
    authDomain: "react-oddamwdobrerece.firebaseapp.com",
    projectId: "react-oddamwdobrerece",
    storageBucket: "react-oddamwdobrerece.appspot.com",
    messagingSenderId: "210218246641",
    appId: "1:210218246641:web:0c05d723c1e455d0b46450",
    measurementId: "G-LGD3MK74RJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
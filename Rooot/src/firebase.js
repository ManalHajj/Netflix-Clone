import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCL2vwDCGHOug43WzEMYtisHqK188DFpbs",
  authDomain: "netflix-clone-build-2d7d8.firebaseapp.com",
  projectId: "netflix-clone-build-2d7d8",
  storageBucket: "netflix-clone-build-2d7d8.appspot.com",
  messagingSenderId: "731815724877",
  appId: "1:731815724877:web:7022613c87d90760769904"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig); // initialize the app
  const db= firebaseApp.firestore();
  const auth = firebase.auth(); 

  export{ auth };
  export default db;
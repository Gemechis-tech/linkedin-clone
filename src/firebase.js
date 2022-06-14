import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAoDsY9UPKjw4KmA_vKB_3cdoWKqlEPILE",
  authDomain: "linkedin-clone-4ccbd.firebaseapp.com",
  projectId: "linkedin-clone-4ccbd",
  storageBucket: "linkedin-clone-4ccbd.appspot.com",
  messagingSenderId: "112165154284",
  appId: "1:112165154284:web:dbdb7e9096dedad7e3e4c9",
  measurementId: "G-WCM7NPW0ER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestone();
const auth = firebase.auth();

export { db, auth };
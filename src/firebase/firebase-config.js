import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCoRORn6SWZ_olq50HQuKsrOpTe9Dhjgew",
    authDomain: "react-journal-dac63.firebaseapp.com",
    databaseURL: "https://react-journal-dac63.firebaseio.com",
    projectId: "react-journal-dac63",
    storageBucket: "react-journal-dac63.appspot.com",
    messagingSenderId: "1085891388105",
    appId: "1:1085891388105:web:f371cf82b442f861aaa318"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
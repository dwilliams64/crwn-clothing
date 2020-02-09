//We need this base import import as it will give us access to firestore and auth.
// firestore and auth will be attached to this keyword automatically
// when we import them in. 
import firebase from 'firebase/app';

// Imports firestore for data storage
import 'firebase/firestore';

// Imports authentication
import 'firebase/auth';

// Config object
const config = {
    apiKey: "AIzaSyB8M4xeBYDef0SCVXDexfQ2PmOEOPagS1w",
    authDomain: "crwn-db-ef221.firebaseapp.com",
    databaseURL: "https://crwn-db-ef221.firebaseio.com",
    projectId: "crwn-db-ef221",
    storageBucket: "crwn-db-ef221.appspot.com",
    messagingSenderId: "308247597391",
    appId: "1:308247597391:web:149f28946cdd33b382b53a",
    measurementId: "G-F79WYDW1QT"
};

// Initiallizing by passing in our config object.
firebase.initializeApp(config);

// Exports authintication
export const auth = firebase.auth();

// Exports firestore
export const firestore = firebase.firestore();

// Creates new instance of google authintication.
// There are different types of sign ins for other platforms such as twitter, we
// are just using the google sign in in this case.
const provider = new firebase.auth.GoogleAuthProvider();

// Triggers google popup when google auth triggered for sign in or sign up.
provider.setCustomParameters({ prompt: 'select_account' });

// This creates a sign in popup for google accounts.
// We passed in our provider instance from above.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
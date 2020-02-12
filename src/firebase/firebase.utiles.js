import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/*

Currently we do not have away to store our authenticated users inside of our
database.  

When a user signs in we get an authentication object returned to us.

We can use certain properties from this object inside of our App.

We are going to pull the properties we need from the auth object and put them into our database.

*/

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

// The following function if for creating a user Profile inside of our database.

// Takes authentcated user from the auth.onAuthStateChanged() method call inside of our App component (App.js).

// Since we are making an api call we will be using asynchronous function.

// Our function will take two arguments:
// 1. The authentication object that contains the user authentication.
// 2. Any additional data (we can even pass in users phone numbers since that is a property on the user session object).
export const createUserProfileDocument = async (userAuth, additionalData) => {    
    // Note: This function is used in App.js in the componentDidMount()

    // We only want to run our code if the user object is not null.

    // By checking userAuth with a bang operator we are saying if 
    // the user auth object returns false reverse the false make it true and stop running the code
    // by returning before any code below the return can be ran.

    // If a user is authenticated then the value will be true so we reverse it with the bang, make it false
    // and our function will continue to run.
    if (!userAuth) return;

    // Returns a queryReference object.
    // .uid is a property on the user login object that should return
    // the ID for that of that user object.
    // By using `${userAuth.uid}` we can dynamically use the .uid property
    // to make a queryReference for a document ID which has a similar format to the .uid property.
    // What we pass into our .doc() mehtod must be the path that leads to the container and the document.
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    
    // Note:  The queryReference object does not have the actual data of the
    // collection or document. It instead has properties that tell us details
    // about it, or the method to get the Snapshot object which gives us the
    // data we are looking for.

    // Returns a snapshotObject from the refernceObject
    // In this case we will get a document snapshot since we are
    // queriing for a document.
    const snapShot = await userRef.get();
    
    // The following conditinal statement is for creating an entry in our database
    // if a user who has been authenticated does not exist in our database.

    // .exists is a property on the snapShot object we get from the above code
    // that will tell us if the document we are quering for exits in our database
    // or not.
    if(!snapShot.exists) {
        // We are taking the properties from our user object that was taken
        // from when we used the function in our App component(App.js).
        const { displayName, email } = userAuth;

        // Created a date object so we can use it to tell when the new user
        // was added to our database.
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
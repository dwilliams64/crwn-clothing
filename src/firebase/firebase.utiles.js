import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    // .batch() gives us access to an object that will allow us
    // to store all of our .set() calls in a batch and then send
    // the batch object back to firebase once we finish populating
    // the batch object with our .set() calls.
    const batch = firestore.batch();
    

    objectsToAdd.forEach(obj => {

        // Gets Document at empty string
        // Creates a new Document object reference and generates 
        // a random ID when no argument is present
        const newDocRef = collectionRef.doc();

        // batch.set will batch together multiple .set() calls
        // 1st arguemnt is our Document Reference
        // 2nd argument is value we are setting on our Document Reference
        batch.set(newDocRef, obj);
        

        
    });

    // Commits our batch to be set off to firebase
    // .commit() returns promise
    return await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
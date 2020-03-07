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
    const batch = firestore.batch();
    

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);        
    });

    return await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
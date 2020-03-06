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

// Will add Shop Data to firebase
// 1st argument will be the name of our collection and will be the key
// 2nd will be the our shop data that we want to add to firebase
export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    
    // Even though we do not have a reference object for our collections
    // firebase will still return a reference object. This way we can add
    // documents and a collection to the collection reference. By doing this whatever documents
    // and collection we add to this collection reference will be saved to our database without the
    // need for us to configure anything inside of the firebase console.
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
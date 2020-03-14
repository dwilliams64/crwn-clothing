import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collectionpage';

import CollectoinsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utiles';

class ShopPage extends React.Component {

    // Used to unsubscribe from firestore to prevent memory leaks
    // when ShopPage component is unmounted.
    unsubscribeFromSnapshot = null;

    componentDidMount() {

        // Returns an object that represents the current place in our 
        // database that we are querying.
        // In this case we are querying the collection collections (store items we moved to firebase)
        const collectionRef = firestore.collection('collections');

        console.log(collectionRef);

        // We our using the .onSnapshot method on our collection reference
        // object to get a snapshot of our collections data (store items).
        // This will give us access to the store items data we need inside
        // of our app.        
        collectionRef.onSnapshot(async snapshot => {

            // Passing our snapshot object from firebase into our 
            // custom function from our firebase utlies
            convertCollectionsSnapshotToMap(snapshot);
            
        });
    }

    render () {
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path }`} component={ CollectoinsOverview } />
                <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
            </div>
        );
    }
} 

export default ShopPage;
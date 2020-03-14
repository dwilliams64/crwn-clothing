import React from 'react';
import { Route } from 'react-router-dom';

// Importing connect component from react-redux
import { connect } from 'react-redux';

import CollectionPage from '../collection/collectionpage';

import CollectoinsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utiles';

// Importing updateCollections action from shop actions
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {

        // Brings in a prop that will take our collections that we brought in from 
        // firebase and bring that data into redux.
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
  
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            // collections from firebase is passed into the prop (passed into the 
            // props method) so that
            // the collections can be brought into redux.
            updateCollections(collectionsMap);          
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

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
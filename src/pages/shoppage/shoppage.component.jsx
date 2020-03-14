import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collectionpage';

import CollectoinsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utiles';

import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
  
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
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
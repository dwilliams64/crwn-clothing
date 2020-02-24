import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collectoin-preview.component';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProp}) =>(
                <CollectionPreview key={id} {...otherCollectionProp}/>
            ))            
        }                
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
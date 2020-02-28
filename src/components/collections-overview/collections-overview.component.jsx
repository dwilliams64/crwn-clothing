import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collectoin-preview.component';

const CollectoinsOverview = ({ collections }) => {
    console.log(collections)
    return(
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProp}) =>(
                <CollectionPreview key={id} {...otherCollectionProp}/>
            ))            
        }          
    </div>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectoinsOverview);
import React from 'react';
import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return(
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>
)};


// mapStateToProps has two arguments.

// 1st is the state wich is the overall state reducer state at top level.

// 2nd argument is optional and is the props of the the component we wish
// to wrap inside of the connect method below.
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)
});

export default connect(mapStateToProps)(CollectionPage);
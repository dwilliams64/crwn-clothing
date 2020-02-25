import React from 'react';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    console.log(match)

    /*
        For testing I set the :collectionId to hats by using the following url in the browser:
        http://localhost:3000/shop/hats

        If we look at the console.log() from above the match object looks something like this:

        {
            path: "/shop/:collectionId"
            url: "/shop/hats"
            isExact: true
            params: {
                collectionId: "hats"
            }
                
        }
        
        Take note of our the collectonId is mapped to hats from the /shop/hats url.

        We want access to params.collectionId so that we can dynamically render our
        different collections on the fly based on the collectoinId params that are pulled
        off the url (/hats for this example).
    
    
    */
    return(
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>
)};

export default CollectionPage;
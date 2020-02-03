import React from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../../components/collection-preview/collectoin-preview.component';

class  ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        console.log(collections)
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProp}) =>(
                        <CollectionPreview id={id} {...otherCollectionProp}/>
                    ))
                    
                }                
            </div>
        )
    }
}

export default ShopPage;
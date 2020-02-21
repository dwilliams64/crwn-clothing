import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)

                // Modified code so that the item is passed in as a whole.
                // We did this so the whole item can be passed into redux.
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    
)

export default CollectionPreview;
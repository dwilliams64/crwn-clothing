import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                // We can chain together multiple array methods on a single array.
                // Here we are using filter() to filter out 4 items from our array 
                // and then mapping our values to create each item inside of the preview 
                // collection component.

                // The code below can be a performance issue because every time the component is rendered
                // or re rendered these methods on the array will run. We will learn how to handle this
                // better later on in the course.
                items.filter((item, idx) => idx < 4)
                    .map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
    
)

export default CollectionPreview;
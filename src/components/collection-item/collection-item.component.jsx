import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import './collection-item.styles.scss';

// Note: On functions use () when you want to return 1 thing.
// Use {} when you want to retrun more than one thing.

// item is prop that represents the item as a whole (has all the properties that make up the item)
// that we passed down from our preview collection component.
const CollectionItem = ({item, addItem}) => {

    // We still need the properties for the item so 
    // we destructured them here.
    const { name, imageUrl, price } = item;

    // Now we can pass our item to redux and our store.
    return (
        <div className='collection-item'>
            <div 
                className='image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>    
        </div>
    )
}

/*

1. addItem inside of mapDispatchToState gets passed into component -> 

2. function on addItem is ran with the item passed in as an argument ->

3. addItem(item) action is ran passing in the item ->

4. addItem(item) action returns action object with type and payload ->

5. dispatch() passes action object into store ->

6. action object is now part of redux flow

*/

const mapDispatchToState = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToState)(CollectionItem);

/*

When we are talking about item we are talking about the properties that make up the item.

Remember this from the basic JavaScript course that object have properties that can represent
a real object. In this case we have a collection of properties that make the item object. 

When we want to create something the user can see we map the properties to html elements to
create the object on the screen.

*/
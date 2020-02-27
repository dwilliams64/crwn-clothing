import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>     
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );

/*

Note how we took out our collections map object as we no longer need it since we are no longer using an array and have no need to map collection id's.  

Also notice how we are just passing in the collectionUrlParam into collections which is now an object. 

If you recall when accessing a key in an object you can either use the dot notation or the bracket notation. 

We are using the bracket notation here because it allows us to pass dynamic values such as variables inside and when the value is evaluated it will be the same as using the dot notation. 

Go through the objects section on javascript.info for more info. 

*/
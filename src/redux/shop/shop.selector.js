import { createSelector } from 'reselect';

// Collection map.

// We will be using this object to map the id of the collection
// to the string of the url the represnts our collection.

// Example: /shop/hat will be id 1 and /shop/jacket will be id 3.
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>     
    createSelector(
        [selectCollections],
        collections => 
            collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    );

// const selectionCollection = (collectionUrl) => createSelector(array, )
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

// Converts our colletions object into an array so we can map over the returned array
// inside of our collections-overview component.
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);
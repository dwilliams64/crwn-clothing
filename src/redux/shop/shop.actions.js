import ShopActionTypes from './shop.types';

export const updateCollections = collections => ({
    type: ShopActionTypes.COLLECTION_UPDATE,
    payload: collections 
});
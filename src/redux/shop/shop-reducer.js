import SHOP_DATA from '../../data/shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case ShopActionTypes.COLLECTION_UPDATE:
            return {
                ...state,
                collections: actions.payload
            }

        default: return state
    }
}

export default shopReducer;
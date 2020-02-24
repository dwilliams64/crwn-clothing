import { createStore, applyMiddleware } from 'redux';

// Allows our browser to cache our store depending on certian config options.
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Passing in our store so we can cache it into either session storage or local storage.
// This will persist our store.
const persistor = persistStore(store);

export { store, persistor };
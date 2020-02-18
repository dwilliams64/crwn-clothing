import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

/*
    index.js is where we are going to put the new component that
    get from react-redux. This will give us access to store and the
    reducers we will be writing.
*/

// Component we get from react-redux.
// We are going to wrap this component around the entire application.

// Provider must be a parent of the app as we will be storing store at that level
// so the whole application will have access to store.

// Provider gives us access to store.
import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render(
    // We are passing in our store into the Provider component so the whole app
    // will have access to the store.

    // Now we can dispatch actions to that store or read values off of the store
    // and pass those values into our components.
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
    
    , document.getElementById('root'));
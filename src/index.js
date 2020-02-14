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

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
    
    , document.getElementById('root'));
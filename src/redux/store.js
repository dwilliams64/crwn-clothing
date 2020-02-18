// createStore creates our store for our app.
// applyMiddleware will use any middleware we want to bring in.
// Both are functions
import { createStore, applyMiddleware } from 'redux';

// Imports our logger middleware.
// Logger will allow us to log actions for debugging before the
// action hits the Root reducer.
import logger from 'redux-logger';

// Imports our Root reducer.
import rootReducer from './root-reducer';

// We want to have our middleware catch the actions so we can display 
// the action before the action is passed on to the reducer.

// Middleware is basically functions that catch actions, do something with
// those actions, and then passes the actions to the Root reducer.

// This is where we will put our middlewares that we will be working with.
const middlewares = [logger];

// We are using createStore to create the store for our app.

// createStore takes two arguments:
// 1st argument is the rootReducer object that we imported from root-reducer.js.
// 2nd argument is the applyMiddleware function.

// applyMiddleware takes in an infinite amount of arguments.

// We are storing our middlwares inside of an array that we are going to spread into the applyMiddleware function. Spreading middlewares
// array into applyMiddleware is like adding individual arguments 

// Example:
// const middlewares = [logger, otherMiddleware, anotherMiddleware];
// applyMiddleware(...middlewares) is the same as applyMiddleware(logger, otherMiddleware, anotherMiddleware) 

// We could pass in each middleware one by one without an array but by setting things up like this we can manage
// our middlewares inside of our array in the above middleware array. This way of doing things is much more scaleable.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
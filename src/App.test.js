import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Allows us call on our database
const firestore = firebase.firestore();

// In our fire base console we setup:

// 1. users collection
// 2. document object that represents a user
// 3. Under that document user we have another collection called cartItems
// 4. And under the cartItems collection we have two documents (N64, ps vita), currently we are only accessing the N64

// collection -> document -> collection -> document
// users -> petriD -> cartItems -> N64

// Each document has a unique ID so petriD (the user name) is represented by fZCPvr52Qjz3DaAF4kgi
// and our cartItem is 6r8PpOrt2ZWgPH4L0cvX. These IDs where auto generated in the Firebase Console.

// This is one way to query our document N64
firestore.collection('users').doc('fZCPvr52Qjz3DaAF4kgi').collection('cartItems').doc('6r8PpOrt2ZWgPH4L0cvX');

// Another way to query our document N64
firestore.doc('/users/fZCPvr52Qjz3DaAF4kgi/cartItems/6r8PpOrt2ZWgPH4L0cvX');

// We can query our cartItem collection
firestore.collection('/users/fZCPvr52Qjz3DaAF4kgi/cartItems');

/*
Summary:

We went over how to setup our Firebase database.

Firebase uses noSQL

There are two types of data in Firebase:

1. Collections
2. Documents

Collections are a collection of objects, in this case the objects are documents.

Documents are the objects stored inside of collections.

Documents can have properties that can point to other collections.

We also learned how to query selectors using the .doc() and .collection() methods.

We can either chain together these methods to query the document or collection we want
to query or we can give the given path name to the collection using .collection() on
collections we want to query or .doc() with the path name of the document we wish to
query.

*/












// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

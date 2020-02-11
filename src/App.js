import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

// Importing auth lib from firebase utilites
import { auth } from './firebase/firebase.utiles';

import './App.css';

/*

Summary:

In previous lessons we created away to check user sign in state and away to unsubscribe a user session when the app is
unmounted. The code that is realted to that is under the componentDidMount() and componentWillUmount() life cycle methods.

In this lesson we created a sign-in and sign-out function indside of our Header component for people signing in with their google account.

We also created away to add a custom class to change our look on a CustomButton component.

By doing this we can use the base of our CustomButton component and add a class to change the button as we see fit.

This allows our CustomButton component to be reuseable for a single button that we can expand on to change the button with
custom classes.


*/


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // Listens to user state authentcation from our firebase backend.  
  componentDidMount() {    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
  }

  // Unsubscribes user session when component is unmounted. (currentUser state in our app will go back to null when unmounted)
  componentWillUnmount() { this.unsubscribeFromAuth(); }

  render() {
    return (
      <div>

        {/* Passing in our user state to our header component so we can use it to create the sign-in/sign-out button for the header. */}
        <Header currentUser={this.state.currentUser}/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopePage} />
          <Route exact path='/signin' component={SignInUp} />
        </Switch>

      </div>
    );

  }

}

export default App;

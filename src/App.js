import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

/*
  Summary:

  Basically we setup google authentication through firebase.  

  We then setup google authentication inside of our app.

  We also set our app up to get the user session state from firebase when the app component mounts.

  Now firebase has a way to talk to our app.

  We also setup away to unsubscribe a user session when our App component unmounts.


*/

// Imports authentication method.
import { auth } from './firebase/firebase.utiles';

import './App.css';

// We changed our App component from a functional component to a class component
// so we can keep track of user authentaction inside of state.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  /*
    (1) this.unsubscribeFromAuth is the returned value of auth.onAuthStateChanged() which is firebase.Unsubscribe

    (2) this.unsubscribeFromAuth is firebase.Unsubscribe

    (3) when componentDidMount is called, auth.onAuthStateChanged() is executed and the returned value of auth.onAuthStateChanged() which is firebase.
    Unsubscribe is assigned to this.unsubscribeFromAuth

    (4) when componentWillUnmount is called, this.unsubscribeFromAuth() is executed that is firebase.Unsubscribe() 
    is executed which allows me to close the subscription 
  
  */


  // New variable that we created for unsubscribing.
  // Currently it is set to null until we call it in our componentDidMout life cycle method below.
  unsubscribeFromAuth = null;

  componentDidMount() {

    // onAuthStateChanged is a method from the fire base auth lib.

    // It takes a parameter which will be the current user logged in on the back end side.

    // The user param is an object.

    // This method uses what is called an open subscription. User session data will be sent
    // to our App component as long as the component is mounted.

    // An open subscription means that the firebase platform will have open communication with our
    // app and can send user session data to our app any time there is a change in the user session (login, logout, update).

    // Firebase also keeps track of multiple instances of our app when different users sign in on different
    // devices.

    // We do not have to manually check to see if user state has changed on our firebase side. This method handles it
    // for us since it uses an open subscription. Any time user state changes firebase will send us an update automatically.

    // Note: user session and user state are basically the same thing.
    
    // auth.onAuthStateChanged() is ran and the return value is stored in our unsubscribeFromAuth variable we created.

    // What we get back as a return value is firebase.Unsubscribe() method which we will use in our componentWillUnmount
    // life cycle method.

    // More info can be found here: https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#onauthstatechanged
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      // Storing logged in user in our state.
      this.setState({ currentUser: user });     
    });
  }

  // Since we are using an open subscribtion we will need to close it whenever the component unmounts
  // in order to prevent memory leaks.
  componentWillUnmount() {

    // We are using the new return value we got from our componentDidMount, which returns a unsubscribe method and calling upon
    // this new value here when the component unmounts to unsubscribe the user.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>

        <Header />

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

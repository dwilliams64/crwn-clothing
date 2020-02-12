import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utiles';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  /*

  Now that we have away of storing user data in our database we are going to setup away
  to store user data in the state of our application.

  */

  componentDidMount() {    

    // .onAuthStateChanged() will communicate any changes in authentication back to our App.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      // Checks to see if user is signed out.
      // auth.onAuthStateChanged() will return a null value if a user is not signed in.
      if (userAuth) {

        // We will get the value of our userRef returned from createUserProfileDocument()
        // inside of our firebase utiles.

        // We need the userRef to see if our database updated at the reference with any new data.
        const userRef = await createUserProfileDocument(userAuth);

        // We get a documentSnapshot object from our documentReference
        // object.

        // The documentSnapshot object allows us to check if a document exists
        // at this query using the .exists property which returns a boolean.

        // We can also get the actual properties on the object by calling
        // the .data() method, which returns us a JSON object of the document.

        userRef.onSnapshot(snapShot => {

          // We can view the snapShot object on our userRef. Here we have access to 
          // the userRef id property which is what we want to pull into our state.          
          console.log(snapShot);

          // We cannot pull off the other propeties that we want that are stored on our
          // database with just the snapShot alone. In order to get the properties we stored in our database
          // we need use the .data() method
          console.log(snapShot.data());

          // Now that we have away to retrive the data we need from the userRef we can store them in the state.
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });

      } 
        // If the user state is null/user not signed in the the state will be set to that current value of null.
      else {
        this.setState({ currentUser: userAuth});
      }

      

      // this.setState({ currentUser: user })
      
      
    });
  }

  componentWillUnmount() { this.unsubscribeFromAuth(); }

  render() {
    return (
      <div>
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
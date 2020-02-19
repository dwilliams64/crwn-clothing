import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utiles';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

class App extends React.Component {
  // Now that we are using redux we no longer need our constructor function for 
  // state managment.

  unsubscribeFromAuth = null;

  componentDidMount() {

    // Destructuring the setCurrentUser property from mapDispatchToProps.
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          // Now we use setCurrentUser property which comes from our dispatch call that is mapped to the prop
          // for this component.

          // We are passing an object with our user snapShot data to our action. This will become the payload.
          setCurrentUser({            
              id: snapShot.id,
              ...snapShot.data()            
          })
        });
        
      } else {

        // We passing in the userAuth object to our action. This will become the payload.
        setCurrentUser(userAuth);
      }      
      
    });
  }

  componentWillUnmount() { this.unsubscribeFromAuth(); }

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


// mapDispatchToProps returns an object where the props name will be whatever
// prop we want to pass in that dispatches the new action that we're trying
// to pass. In this case it will be the setCurrentUser action inside of our 
// user.action.js.


const mapDispatchToProps = dispatch => ({

  // The function on the setCurrentUser property takes in the user object as
  // an argument. It then calls on dispatch, which is a way for redux to know whatever
  // object is being passed into redux is going to be an actoin object that is going
  // to be passed every reducer. 
  
  // The object that gets returned from dispatch and set on the setCurrentUser property
  // is an action object that is returned from the setCurrentUser action.

  // 1. So we run our action setCurrentUser while passing in the user object.
  // setCurrentUser action will then return an action object which can be viewed
  // in user.action.js.

  // 2. dispatch then ran using the action object as an argument. When dispatch is ran
  // the user action is dispatched to all reducers. In this case the user reducer will catch
  // this action. The value from dispatch running is then set on the setCurrentUser property.
  setCurrentUser: user => dispatch(setCurrentUser(user))
});




// In this case we give connect 2 arguments.

// 1st argument is mapStateToProps which we do not need since we are not
// passing a state into a prop for this component. We will pass null in.

// 2nd argument is mapDispatchToProps.

// Using currying we pass in our App component so we get a new super version
// of our App component that will have access to redux and our App component
// will have the ability to pass state to redux via an action.
export default connect(null, mapDispatchToProps)(App);
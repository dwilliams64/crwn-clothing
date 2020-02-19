import React from 'react';


// Importing the Redirect component.
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utiles';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({            
              id: snapShot.id,
              ...snapShot.data()            
          })
        });
        
      } else {
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

          {/* 
              A component with a render prop takes a function that returns a React 
              element and calls it instead of implementing its own render logic.
          
              https://reactjs.org/docs/render-props.html
          
          */}
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (

              // Component from React-Router that is used for redirecting.
              // https://reacttraining.com/react-router/web/api/Redirect
              <Redirect to='/' />
            ) : (
              <SignInUp />
            )} />
        </Switch>

      </div>
    );

  }

}

// Will get our currentUser value from redux.
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
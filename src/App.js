import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import CheckoutPage from './pages/checkout/checkoutpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utiles';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';

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
          <Route path='/shop' component={ShopePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInUp />
            )} />
        </Switch>

      </div>
    );

  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
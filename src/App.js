import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utiles';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
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
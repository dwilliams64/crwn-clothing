import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      
      {/* We want our Header component to be present on every page. Easiest 
      way to do this is to, is to place the header component outside of our routes so 
      that the Header component will always be rendered above a Page component. */}
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopePage} />
      </Switch>

    </div>
  );
}

export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';
// test

function App() {
  return (
    <div>
      <Switch>
        {/* Currently we want to access history from our Route components prop and
        use it for our MenuItem component so when a user clicks on the MenuItem
        that page will be rendered.

        The problem is that the MenuItem component is a child of the HomePage component.

        history can only be accessed by the parent component which is HomePage in this case.

        We could pass down the history prop from the HomePage component and then pass it to the
        child component which is the MenuItem component in this case, but this is a bad practice 
        called prop drilling/prop tunneling and could become a problem later on as our application expands.

        Luckly for us react-router-dom has higher order component called withRouter() that can help us 
        out.

        A higher order compoent in React is a function that takes a component and returns a modified 
        component. Go to the MenuItem component to see how it works and for more details.  */}


        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

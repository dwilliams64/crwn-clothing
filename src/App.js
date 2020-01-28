import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

// We turned our App component into a functional component.
// Currently it is just rendering our HomePage compoent.
function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;

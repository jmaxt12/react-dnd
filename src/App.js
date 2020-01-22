import React, { Component } from 'react';

import Dnd from './container/dnd/dnd'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <p>STARTING POINT</p>
        <Dnd />
      </div>
    );
  }
}

export default App;

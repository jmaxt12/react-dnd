import React, { Component } from 'react';

import Dnd from './container/dnd/dnd'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Dungeons & Dragons</h1>
        <Dnd />
      </div>
    );
  }
}

export default App;

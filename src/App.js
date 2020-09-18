import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><Game></Game></p>
      </div>
    );
  }
}

export default App;

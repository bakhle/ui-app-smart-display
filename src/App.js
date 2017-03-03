// Layout File for entire app

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        {this.props.children}
      </div>
    );
  }
}

export default App;

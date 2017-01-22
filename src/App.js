import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks';
import Greetings from './Greetings';
import DateTime from './DateTime';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stocks />
        <DateTime />
        <Weather />
        <Greetings />
      </div>
    );
  }
}

export default App;

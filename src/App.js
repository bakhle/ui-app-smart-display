import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks';
import Greetings from './Greetings';
import DateTime from './DateTime';
import Weather from './Weather';
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stocks />
        <DateTime />
        <Weather />
        <News />
        <Greetings />
      </div>
    );
  }
}

export default App;

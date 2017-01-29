import React, { Component } from 'react';
import './App.css';
import Stocks from './Stocks';
import Weather from './Weather';
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stocks />
        <Weather />
        <News />
      </div>
    );
  }
}

export default App;

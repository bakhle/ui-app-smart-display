import React, { Component } from 'react';
import './App.css';
import News from './News';
import Stocks from './Stocks';
import Todos from './Todos';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stocks />
        <Todos />
        <Weather />
        <News />
      </div>
    );
  }
}

export default App;

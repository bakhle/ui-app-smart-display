import React, { Component } from 'react';
import './App.css';
import News from './News';
import Stocks from './Stocks';
import Todos from './Todos';
import Greetings from './Greetings';
import DateTime from './DateTime';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stocks />
        <Todos />
        <DateTime />
        <Weather />
        <News />
        <Greetings />
      </div>
    );
  }
}

export default App;

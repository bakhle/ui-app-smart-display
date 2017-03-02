import React, { Component } from 'react';
import './Display.css';
import News from './News';
import Stocks from './Stocks';
import Todos from './Todos';
import Weather from './Weather';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <Stocks />
        <Todos />
        <Weather />
        <News />
      </div>
    );
  }
}

export default Display;

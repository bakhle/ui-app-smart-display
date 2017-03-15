import React, { Component } from 'react';
import './Display.css';

import DateTime from './DateTime';
import Greetings from './Greetings';
import News from './News';
import Stocks from './Stocks';
import Todos from './Todos';
import Weather from './Weather';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <DateTime />
        <Greetings />
        <News />
        <Stocks />
        <Todos />
        <Weather />
      </div>
    );
  }
}

export default Display;

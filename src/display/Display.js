import React, { Component } from 'react';
import './Display.css';

import DateTime from './DateTime';
import Greetings from './Greetings';
import News from './News';
import Stocks from './Stocks';
import Todos from './Todos';
import Weather from './Weather';

const config = require('../../config/config.json');

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <DateTime config={config}/>
        <Greetings config={config}/>
        <News config={config}/>
        <Stocks config={config}/>
        <Todos config={config}/>
        <Weather config={config}/>
      </div>
    );
  }
}

export default Display;

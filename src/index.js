import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './display/Display';
import Home from './home/Home';
import './index.css';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="display" component={Display}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import './index.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/display" component={App}></Route>
  </Router>,
  document.getElementById('root')
);

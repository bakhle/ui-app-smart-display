import React, { Component } from 'react';
import './Home.css';

import {Link} from 'react-router';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>Home Page</p>
        <p>Todo Client here</p>
        <Link to="display"><button className="btn btn-default">Display</button></Link>
        <Link to="todo"><button className="btn btn-default">Todo</button></Link>
      </div>
    );
  }
}

export default Home;

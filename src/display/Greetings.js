import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import './Greetings.css';

class Greetings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greetings: '',
      currentGreeting: 'Hello!'
    }
  }

  componentWillMount() {
    this.fetchGreeting(); // only for first time. when page loads to perform search
  };

  componentDidMount() {
    // change the greeting state continuously after certain interval
    setInterval (() => {
      this.setGreeting();
    }, 1000 * 60);

    // fetch new greetings from server after certain interval
    setInterval (() => {
      this.fetchGreeting();
    }, 1000 * 60 * 5);
  };

  componentWillReceiveProps(newProps) {
  };

  shouldComponentUpdate(newProps, newState) {
    return true;
  };

  componentWillUpdate(nextProps, nextState) {
  };

  componentDidUpdate(prevProps, prevState) {
  };

  componentWillUnmount() {
  };

  setGreeting () {
    const keys = Object.keys(this.state.greetings);
    const length = keys.length;
    const index = Math.floor(length * Math.random());
    const selectedKey = keys[index];

    this.setState({ currentGreeting: this.state.greetings[selectedKey] });

  };


  fetchGreeting() {
    const serverUrl = this.props.config.serverUrl + '/greetings';
    Request.get(serverUrl)
      .then((response) => {
        this.setState({
          greetings: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className='Greetings'>
        <div className='container'>
          <p>{this.state.currentGreeting}</p>
        </div>
      </div>
    );
  }
}

export default Greetings;

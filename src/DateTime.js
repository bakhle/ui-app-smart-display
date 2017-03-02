import React, { Component } from 'react';

import './DateTime.css';

class DateTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: ''
    }
  }

  componentWillMount() {
    this.setTime(); 
  };

  componentDidMount() {
    // change the time continuously after certain interval
    setInterval (() => {
      this.setTime();
    }, 1000);
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

  setTime () {
    let moment = new Date();
    let time = moment.toLocaleTimeString();
    let date = moment.toDateString();
    this.setState({
      time: time, 
      date: date 
    });
  };

  render() {
    return (
      <div className='DateTime'>
        <div className='container'>
          <p>{this.state.date}</p>
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}

export default DateTime;

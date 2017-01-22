import React, { Component } from 'react';
import Request from 'superagent';

import './Weather.css';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: 'Hello World I am awesome',
      longitude: 'Hello World I am awesome'
    }
  }

  componentWillMount() {
    this.fetchUserProfile();
  };

  componentDidMount() {
    setInterval (() => {
      this.fetchUserProfile();
    }, 1000 * 60 * 60 * 2); // every 2 hours update profile
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

  fetchUserProfile () {
    const serverUrl = 'http://localhost:5000/users/';
    Request.get(serverUrl)
      .then((response) => {
        const profile = response.body;
        const lat = profile.location.split(',')[0];
        const lon = profile.location.split(',')[1];

        this.setState({
          latitude: lat,
          longitude: lon
        });
      })
      .catch((err) => {
        console.error(err);
      });;
  }

  render() {
    const iframeLink = 'http://forecast.io/embed/#name=Vasco da Gama&color=#ffffff&text-color=#ffffff&font-size=20&units=uk&lat='+ this.state.latitude + '&lon=' + this.state.longitude;
    
    return (
      <div className='Weather'>
        <div className='container'>
        <iframe frameBorder="0" height="220" width="500" src={iframeLink}></iframe>
        </div>
      </div>
    );
  }
}

export default Weather;

import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import './Stocks.css';

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks: ''
    }
  }

  componentWillMount() {
    this.fetchStocks(); // only for first time. when page loads to perform search
  };

  componentDidMount() {
    setInterval (() => {
      this.fetchStocks();
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


  fetchStocks(){
    const serverUrl = 'http://localhost:5000/users/stocks';
    Request.get(serverUrl)
      .then((response) => {
        this.setState({
          stocks: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const stockList = _.map(this.state.stocks, (stock) => {
      return(
        <li className="stock" key={stock.id}>
          <span className="heading col-md-8">
            <b>
              {stock.t} 
            </b> - {stock.l_cur}
          </span>
        </li>
      );
    });

    return (
      <div className='Stocks'>
        <div className='container'>
          <ul>{stockList}</ul>
        </div>
      </div>
    );
  }
}

export default Stocks;

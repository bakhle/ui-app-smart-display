import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import './Todos.css';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.fetchTodos(); // only for first time. when page loads to perform search
  };

  componentDidMount() {
    setInterval (() => {
      this.fetchTodos();
    }, 1000 * 5);
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


  fetchTodos(){
    const serverUrl = this.props.config.serverUrl + '/todos';
    Request.get(serverUrl)
      .then((response) => {
        this.setState({
          todos: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const stockList = _.map(this.state.todos, (todo) => {
      if (todo.status === 'false') {  //  display only the ones which are not completed
        return(
          <li className="todo" key={todo.text}>
            <label><input className="checkbox" type="checkbox" value="" disabled />{todo.text}</label>
          </li>
        );
      }
    });

    return (
      <div className='Todos'>
        <div className='container'>
          <ul>{stockList}</ul>
        </div>
      </div>
    );
  }
}

export default Todos;

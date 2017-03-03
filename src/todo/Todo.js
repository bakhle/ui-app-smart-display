import React, { Component } from 'react';
import _ from 'lodash';
import Request from 'superagent';

import './Todo.css';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.fetchTodos(); 
  };

  componentDidMount() {
    // fetch News continuously after certain interval
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

  toggleStatus(boolString) {
    if (boolString === 'false') {
      return 'true';
    }
    return 'false'
  };

  toggleState(i, event) {
    let todos = this.state.todos;

    todos[i].status = this.toggleStatus(todos[i].status);

    this.setState({
      todos
    }, () => {
      const serverUrl = 'http://localhost:5000/users/todos/' + i;
      Request
        .post(serverUrl)
        .send(todos[i])
        .then((response) => {
          this.setState({
            todos: response.body
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  fetchTodos () {
    const serverUrl = 'http://localhost:5000/users/todos';
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

    const todoList = _.map(this.state.todos, (todo, i) => {
      return(
        <li className={todo.status} key={i} value={todo.text} onClick={this.toggleState.bind(this, i)}>
          {todo.text}
        </li>
      );
    });

    return (
      <div className="Todo">
        <div className="container">
          <ul>{todoList}</ul>
        </div>
      </div>
    );
  }
}

export default Todo;

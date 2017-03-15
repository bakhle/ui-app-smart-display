import React, { Component } from 'react';
import _ from 'lodash';
import Request from 'superagent';

import './Todo.css';

const config = require('../../config/config.json');


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

  createTodo(e) {
    const serverUrl = config.serverUrl + '/todos';
    e.preventDefault();

    const todo = {
      text: this.refs.newTodo.value,
      status: 'false'
    };

    Request.post(serverUrl)
      .send(todo)
      .then((response) => {
        this.setState({
          todos: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });

    this.refs.newTodo.value = '';
  };

  deleteTodo(i, e) {
    const serverUrl = config.serverUrl + '/todos/' + i;

    Request
      .delete(serverUrl)
      .then((response) => {
        this.setState({
          todos: response.body
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  fetchTodos() {
    const serverUrl = config.serverUrl + '/todos';
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

  toggleStatus(boolString) {
    if (boolString === 'false') {
      return 'true';
    }
    return 'false'
  };

  toggleState(i, event) {
    const serverUrl = config.serverUrl + '/todos/' + i;
    let todos = this.state.todos;

    todos[i].status = this.toggleStatus(todos[i].status);

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
  };

  render() {

    const todoList = _.map(this.state.todos, (todo, i) => {
      return(
        <li className={todo.status} key={i} value={todo.text}>
          <span onClick={this.toggleState.bind(this, i)}>{todo.text}</span>
          <i className="fa fa-times delete-todo" aria-hidden="true" onClick={this.deleteTodo.bind(this, i)}></i>
        </li>
      );
    });

    return (
      <div className="Todo">
        <div className="container">
          <ul>{todoList}</ul>
          <form onSubmit={this.createTodo.bind(this)} className="form-inline">
            <div className="form-group">
              <input className="todo-text form-control" ref='newTodo' placeholder='New Todo' type='text'></input>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Todo;

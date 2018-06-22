import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TODO, DEL_TODO } from './constants';
import { addTodo, delTodo } from './actions/todoList';

class App extends Component {
  componentWillMount() {
    this.state = {
      todo: {
        add: '',
        del: ''
      }
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.todo.add}
          onChange={this.handleInputAddChange.bind(this)}
        />
        <button onClick={this.handleAddTodo.bind(this)}>Add Todo</button>
        <br />
        <input
          value={this.state.todo.del}
          onChange={this.handleInputDelChange.bind(this)}
        />
        <button onClick={this.handleDelTodo.bind(this)}>Del Todo</button>
        <br />
        {JSON.stringify(this.props.todoList)}
      </div>
    );
  }

  handleInputAddChange(e) {
    this.setState({ todo: { ...this.state.todo, add: e.target.value } });
  }

  handleInputDelChange(e) {
    this.setState({ todo: { ...this.state.todo, del: e.target.value } });
  }

  handleAddTodo() {
    this.props.store.dispatch(addTodo(this.state.todo.add));
  }

  handleDelTodo() {
    this.props.store.dispatch(delTodo(this.state.todo.del));
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoList from './ToDoList';
import createStore from './createStore';

const store = createStore();

class App extends Component {
  render() {
    const currentState = store.getState();
    return (
      <Provider store={store}>
        <ToDoList store={store} />
      </Provider>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));

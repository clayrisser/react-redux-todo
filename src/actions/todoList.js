import { ADD_TODO, DEL_TODO, DO_NOTHING } from '../constants';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function delTodo(todo) {
  return {
    type: DEL_TODO,
    payload: todo
  };
}

export function doNothing() {
  return {
    type: DO_NOTHING,
    payload: null
  };
}

export default { addTodo, delTodo };

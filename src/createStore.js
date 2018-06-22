import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import reducers from './reducers';

export default function() {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

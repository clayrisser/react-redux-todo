import { ADD_TODO, DEL_TODO } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return _.remove(state, item => {
        return item !== action.payload;
      });
  }
  return state;
}

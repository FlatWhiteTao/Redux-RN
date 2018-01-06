import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// make multiple reducers work together nicely
export default combineReducers({
  // key (libraries): value (reducer)
  // application's state will be descirbed by key
  libraries: LibraryReducer
});

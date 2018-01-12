import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// make multiple reducers work together nicely
export default combineReducers({
  // key (libraries): value (reducer)
  // application's state will be descirbed by key
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

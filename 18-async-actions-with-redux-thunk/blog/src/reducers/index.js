import { combineReducers } from 'redux';

export default combineReducers({
  // Trick redux into a valid reducer
  replaceME: () => 'hi there',
});

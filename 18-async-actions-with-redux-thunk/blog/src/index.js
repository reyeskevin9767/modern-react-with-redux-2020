// redux -> the redux library
// react-redux -> integration layer between react and redux
// axiox -> helps us make network requests
// redux-thunk -> middleware to help us make requests in a redux application
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Middleware in Redux
// Function that gets called with every action we dispatch
// Hass the ability to stop, modify, or otherwise mess with action
// Middleware deals with async actions

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

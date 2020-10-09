import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import App from './App';
import store from './redux/store';
import * as actions from './redux/actions';

store.dispatch(actions.init());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Configuration } from 'react-md';
import './index.scss';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500:700&display=swap" />
    </Helmet>
    <Configuration>
      <Provider store={store}>
        <App />
      </Provider>
    </Configuration>
  </React.StrictMode>,
  document.getElementById('root')
);

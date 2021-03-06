import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import 'mock/mockData'; // setting data to local storage;

import './styles/index.scss';
import store from './store';
import Routes from './features/routes/Routes';

render(
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

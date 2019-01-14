import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './styles/index.scss';
import store from './store';
import Routes from './Routes';

render(
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

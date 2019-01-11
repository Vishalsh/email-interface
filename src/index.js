import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from './features/layout/Layout';

import './styles/index.scss';

render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.getElementById('root')
);

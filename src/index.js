import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import Layout from './features/layout/Layout';

render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.getElementById('root')
);

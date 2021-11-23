import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './Components/Layout';

ReactDOM.render(
  <BrowserRouter>
      <Layout />
  </BrowserRouter>,
  document.getElementById('root')
);

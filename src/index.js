import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/js/all.js';
import Particles from './components/Particles';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Particles />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

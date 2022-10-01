import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyle from './styles/Global';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;

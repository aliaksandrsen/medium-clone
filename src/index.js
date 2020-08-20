import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';
import { TopBar } from './components/TopBar';
import { CurrentUserContextProvider } from './contexts/currentUser';

const App = () => {
  return (
    <CurrentUserContextProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserContextProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

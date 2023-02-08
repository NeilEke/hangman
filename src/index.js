import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameStore from './hangman/GameStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={GameStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


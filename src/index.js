import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();

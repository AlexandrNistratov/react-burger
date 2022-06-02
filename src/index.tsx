import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from "./components/App/App";
import { store } from "./services/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <Provider store={ store }>
          <Router>
              <App />
          </Router>
      </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Importation de Provider
import store from './store'; // Importation du store Redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Enveloppement de App avec Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

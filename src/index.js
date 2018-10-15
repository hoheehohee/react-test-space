import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

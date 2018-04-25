import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/dist/material-components-web.css';
import './index.css';
import App from './App';
import FormsyReact from './FormsyReact';
import MaterialUI from './MaterialUI';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MaterialUI />, document.getElementById('root'));
registerServiceWorker();

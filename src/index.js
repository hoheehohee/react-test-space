import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/dist/material-components-web.css';
import './index.css';
import App from './App';
import FormsyReact from './FormsyReact';
import MaterialUI from './MaterialUI';
import ReactInfinite from './ReactInfinite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactInfinite />, document.getElementById('root'));
registerServiceWorker();

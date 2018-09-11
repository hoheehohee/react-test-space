import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import FormsyReact from './containers/FormsyReact';
// import MaterialUI from './MaterialUI';
// import ReactInfinite from './ReactInfinite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

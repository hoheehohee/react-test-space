import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { 
  Main,
  FormsyReact,
  MaterialUI,
  ReactInfinite } from './containers';

class App extends Component {

  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/FormsyReact' component={FormsyReact} />
        </div>
      </Router>
    );
  }
}

export default App;

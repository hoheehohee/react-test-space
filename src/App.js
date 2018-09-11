import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { 
  Main,
  FormsyReact,
  MaterialUI,
  ReactInfinite } from './containers';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/FormsyReact' component={FormsyReact} />
          <Route path='/MaterialUI' component={MaterialUI} />
          <Route path='/ReactInfinite' component={ReactInfinite} />
          <Route path='/JSON' component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;

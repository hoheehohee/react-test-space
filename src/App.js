import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {
  Main,
  FormsyReact,
  MaterialUI,
  ReactInfinite,
  Map,
  EmailSendFom,
  Mobx } from './containers';
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
          <Route path='/Map' component={Map} />
          <Route path='/EmailSend' component={EmailSendFom} />
          <Route path='/Mobx' component={Mobx} />
        </div>
      </Router>
    );
  }
}

export default App;

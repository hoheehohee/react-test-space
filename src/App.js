import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {
  Main,
  FormsyReact,
  MaterialUI,
  ReactInfinite,
<<<<<<< HEAD
  Pose,
  EmailSendFom } from './containers';
class App extends Component {

=======
  Map,
  EmailSendFom,
  Mobx } from './containers';
class App extends Component {
  
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/FormsyReact' component={FormsyReact} />
          <Route path='/MaterialUI' component={MaterialUI} />
          <Route path='/ReactInfinite' component={ReactInfinite} />
          <Route path='/JSON' component={Main} />
<<<<<<< HEAD
          <Route path='/Pose' component={Pose} />
          <Route path='/EmailSend' component={EmailSendFom} />
=======
          <Route path='/Map' component={Map} />
          <Route path='/EmailSend' component={EmailSendFom} />
          <Route path='/Mobx' component={Mobx} />
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
        </div>
      </Router>
    );
  }
}

export default App;

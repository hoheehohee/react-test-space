import React, { Component } from 'react';
import { Count, Counter, CounterStore } from '../components/Mobx';

class Mobx extends Component {
  render() {
    return (
      <div>
        <Count />
        <Counter />
        <CounterStore />
      </div>
    );
  }
}

export default Mobx;
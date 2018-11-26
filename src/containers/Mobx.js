import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { Count, Counter, CounterStore, SuperMarket } from '../components/Mobx';

/**
 * DevTools: 어떤 값을 바꿨을 때 어떠한 컴포넌트들이 영향을 받고, 
 * 업데이트는 얼마나 걸리고, 
 * 어떠한 변화가 일어났는지에 대한 세부적인 정보를 볼 수 있다.
 */
class Mobx extends Component {
  render() {
    return (
      <div>
        {/* <Count />
        <Counter /> */}
        <CounterStore />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default Mobx;
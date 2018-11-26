import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

/**
 * inject 함수는 mobx-react에 있는 함수로서, 컴포넌트에서 스토어에 접근할 수 있게 해준다.
 * 정확히는, 스토어에 있는 값을 컴포넌트의 props로 "주입"을 해준다.
 */
@inject(stores => ({
  number: stores.counter.number,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease
}))
@observer
class Counter extends Component {

  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <div>
          <h1>{number}</h1>
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-1</button>
        </div>
      </div>
    );
  }
}

// decorate(Counter, {
//   number: observable,
//   increase: action,
//   decrease: action
// });

// export default observer(Counter);

export default Counter;
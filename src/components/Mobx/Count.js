import React, { Component } from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

/**
 * setState 없이 그냥 값 바꿔주면 알아서 렌더링해준다.
 * 어떻게 렌더링 해주나면, 코드 최하단에서 사용된 observer가 observable 값이
 * 변할 때 컴포넌트의 forceUpdate를 호출하게 함으로써 자동으로 변화가 화면에 반영된다.
 * 
 * 스토어를 만들 필요 없이 그냥 컴포넌트에 바로 적용 가능
 */
class Count extends Component {
  number  = 0;

  increase = () => { this.number++; };
  decrease = () => { this.number--; };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

decorate(Count, {
  number: observable,
  increase: action,
  decrease: action
});

export default observer(Count);
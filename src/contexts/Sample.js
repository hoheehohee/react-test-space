import React, { Component, createContext } from 'react';

const Context = createContext();

/*
 Provider: Consumers(소비자)가 context 변경 사항을 구독할 수 있게 하는 구성요소
 자식에게 전달할 value prop를 승인 한다.
 하나의 Provider은 많은 소비자들과 연결될 수 있다.
 Provider는 트리의 깊이 값을 대체하기 위해 중첩 할 수 있다.
*/
/*
	Consumer: context 변경 사항을 구독하는 구성요소
	자식은 함수가 필요하다. 이 함수는 현재 context 값을 받고 React node를 return한다.
	함수에 전달 된 value 인수는 트리에서 이 context의 가장 가까운 Provider값 prop 동일하다.
	위의 context에 대한 Provider가 없는 경우 value 값은 createContext()에 전달된 defaultValue와 같다.
	Provider value 변경이 되면 모든 Consumer(소비자)이 랜더링 된다.
	변경은, Object.is와 같은 알고리즘을 사용해 새로운 값과 이전 값을 비교하는 것으로 결정 된다.
	(객체를 값으로 전달할 때 몇 가지 문제가 발생할 수 있다. 참조: https://reactjs.org/docs/context.html#caveats )
 */
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
	state = {
		value: '기본값 입니다.'
	}

	actions = {
		setValue: (value) => {
			this.setState({ value });
		}
	}

	render() {
		const { state, actions } = this;
		const value = { state, actions };

		return(
			<Provider value={value}>
				{this.props.children}
			</Provider>
		)
	}
}

export {
	SampleProvider,
	SampleConsumer
}

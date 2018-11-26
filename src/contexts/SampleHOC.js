import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: SampleHoCConsumer } = Context;

class SampleHoCProvider extends Component {
	state = {
		value: '기본값 입니다.'
	};

	actions = {
		setValue: (value) => {
			this.setState({ value });
		}
	}

	render() {
		const { state, actions } = this;
		const value = { state, actions };

		return (
			<Provider value={value}>
				{this.props.children}
			</Provider>
		)
	}
}

// HOC를 사용
const useSample = (WrappedComponent) => (
	(props) => {
		return (
			<SampleHoCConsumer>
				{
					({ state, actions }) => (
						<WrappedComponent
							value={state.value}
							setValue={actions.setValue}
						/>
					)
				}
			</SampleHoCConsumer>
		)
	}
)

export {
	SampleHoCProvider,
	SampleHoCConsumer,
	useSample
}

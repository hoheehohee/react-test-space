import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { SampleConsumer } from '../../contexts/Sample';

class Sends extends Component {

	state = {
		input: ''
	};

	componentDidMount() {
		this.setState({
			input: this.props.value
		})
	}

	handleChange = (e) => {
		this.setState({ input: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.setValue(this.state.input);
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<TextField name="input" value={this.state.input} onChange={this.handleChange} />
				<RaisedButton type="submit" label="Default" style={{margin: 12}} />
			</form>
		);
	}
}

const SendsContainer = () => (
	<SampleConsumer>
		{
			({state, actions}) => (
				<Sends
					value={state.value}
					setValue={actions.setValue}
				/>
			)
		}
	</SampleConsumer>
);

export default SendsContainer;

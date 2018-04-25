import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, TextField } from 'material-ui';
import { SampleConsumer } from '../../contexts/Sample';
import { useSample } from '../../contexts/SampleHOC';

const BtnTest = styled(Button)`
	&& {
		color: red;
	}
`

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
				<TextField
					label="Test Input"
					name="input"
					value={this.state.input}
					onChange={this.handleChange}
					margin="normal"
				/>
				<Button type="submit" variant="raised"  color="primary" style={{margin: 12}} >Default</Button>
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

// export default SendsContainer;
export default useSample(Sends);

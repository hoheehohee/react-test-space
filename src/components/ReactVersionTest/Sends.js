import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSample } from '../../contexts/SampleHOC';

class Sends extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
		this.inputRef = React.createRef();
	}


	componentDidMount() {
		this.setState({
			input: this.props.value
		});
		console.log('###### this.inputRef.current : ', this.inputRef);
		// this.inputRef.current.handleFocus();
		this.inputRef.current.focus();
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
					autoFocus={true}
					label="Test Input"
					name="input"
					value={this.state.input}
					onChange={this.handleChange}
					margin="normal"
					// innerRef={el => this.inputRef = el}
				/>
				<Button type="submit" variant="raised"  color="primary" style={{margin: 12}} >Default</Button>
				<input type="text" ref={this.inputRef} />
			</form>
		);
	}
}

// export default SendsContainer;
export default useSample(Sends);

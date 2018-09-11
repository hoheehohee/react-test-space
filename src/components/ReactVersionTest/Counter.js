import React from 'react';
import { useAnother } from '../../contexts/Another';
import { Button } from '@material-ui/core';

const Counter = ({ number, incrment }) => (
	<div>
		<h1>{number}</h1>
		<Button onClick={incrment}>더하기</Button>
	</div>
)

export default useAnother(
	({ state, actions }) => ({
		number: state.number,
		incrment: actions.incrment
	})
)(Counter);

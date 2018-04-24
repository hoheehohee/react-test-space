import React from 'react';
import Sends from './Sends';
import styled from 'styled-components';

const LeftPane = () => {
	return(
		<div className="pane">
			<Sends />
		</div>
	)
}

const StyledPane = styled.div`
	flex: 1;
	border: 1px solid black;
	padding: 1rem;
	margin: 1rem;
`
export default LeftPane;

import React from 'react';
// import { SampleConsumer } from '../../contexts/Sample';
import { useSample } from '../../contexts/SampleHOC';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

/*
const Receives = () => {
	return(
		<SampleConsumer>
			{
				(sample) => (
					<FormControl disabled style={{width: 200}}>
	          <InputLabel htmlFor="name-disabled">현재 설정된 값: </InputLabel>
	          <Input id="name-disabled" value={`${sample.state.value}`}/>
	          <FormHelperText>Disabled</FormHelperText>
	        </FormControl>
				)
			}
		</SampleConsumer>
	)
}
*/

const Receives = ({ value, number }) => {
	return (
		<FormControl disabled style={{width: 200}}>
			<InputLabel htmlFor="name-disabled">현재 설정된 값: </InputLabel>
			<Input id="name-disabled" value={`${value}`}/>
			<FormHelperText>Disabled</FormHelperText>
		</FormControl>
	)
}

// export default Receives;
export default useSample(Receives);

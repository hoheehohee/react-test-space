import { withFormsy } from 'formsy-react';
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, ButtonToolbar } from "react-bootstrap";
import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const isValid = this.props.isValid();
    const showRequired = this.props.showRequired();

    return (
      <div style={{width: '500px'}}>
        <FormGroup validationState={ isValid ? 'success' : 'error' }>
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            onChange={this.changeValue}
            type="text"
            value={this.props.getValue() || ''}

          />
          <FormControl.Feedback />
          <HelpBlock>{errorMessage}</HelpBlock>
          <ButtonToolbar>
            <Button onClick={this.props.resetValue}>Reset</Button>
          </ButtonToolbar>
        </FormGroup>
      </div>
    );
  }
}

export default withFormsy(MyInput);

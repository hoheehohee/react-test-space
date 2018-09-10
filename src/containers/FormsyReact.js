import Formsy from 'formsy-react';
import React from 'react';
import { MyInput } from './components/Formsy';

export default class FormsyReact extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    alert(JSON.stringify(model));
  }

  render() {
    return (
      <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyInput
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <MyInput
          name="isNumeric"
          validations="isNumeric"
          validationError="This is not a valid isNumeric"
          required
        />
        <MyInput
          name="matchRegexp"
          validations={{ matchRegexp: /foo/ }}
          validationError="This is not a valid matchRegexp"
          required
        />
        <MyInput
          name="matchRegexp2"
          validations={{ matchRegexp: /^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/ }}
          validationError="This is not a valid matchRegexp2"
          required
        />
        <button type="submit" disabled={!this.state.canSubmit} onClick={this.resetValue}>Submit</button>
      </Formsy>
    );
  }
}

<<<<<<< HEAD
// const emailsend = require('../lib/emailsend');

=======
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
import React, { Component } from 'react';
import {
  Button
} from '@material-ui/core';
// import emailsend from '../lib/emailsend';
class EmailSendFom extends Component {
  state = {  }

  send = () => {
    console.log('##### send: ')
    // emailsend.send();
  }
  render() {
    return (
      <div>
        <Button onClick={this.send}>이메일 전송</Button>
      </div>
    );
  }
}

export default EmailSendFom;
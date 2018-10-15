import React, { Component } from 'react';
import { Single } from '../components';

class Pose extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <Single />
      </div>
    );
  }
}

export default Pose;
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

class NaverMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentWillMount() {
    
  }

  render() {   
    return (
      <div>
        <div id="map" style={{width:'100%', height: '100vh'}} ></div>
      </div>
    );
  }
}

const styles = theme => ({
});

export default withStyles(styles)(NaverMap);
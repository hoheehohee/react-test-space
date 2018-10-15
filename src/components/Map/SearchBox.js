import React, { Component } from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.root} >xs=12</Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    height: 80,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(SearchBox);
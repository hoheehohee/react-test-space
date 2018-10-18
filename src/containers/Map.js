import React, { Component } from 'react';
import { AppBar } from '../components';
import { NaverMap, SearchBox, StoreList } from '../components/Map';
import { withStyles, Grid, Paper } from '@material-ui/core';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Map extends Component {
  @observable number = 0;

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar title={'가맹점 지도'}/>
        <SearchBox />
        <Grid container>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <NaverMap />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <StoreList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid #ededef',
    borderRadius: 0
  }
});

export default withStyles(styles)(Map);
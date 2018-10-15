import React, { Component } from 'react';
import { NaverMap, SearchBox, StoreList } from '../components/Map';
import { withStyles, Grid, Paper, } from '@material-ui/core';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { naver } = window;
    var mapDiv = document.getElementById('map');
    new naver.maps.Map(mapDiv, {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
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
  },
});

export default withStyles(styles)(Map);
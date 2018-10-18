import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppBar } from '../components';
import { NaverMap, SearchBox, StoreList } from '../components/Map';
import { withStyles, Grid, Paper } from '@material-ui/core';
import { Store } from '@material-ui/icons';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Map extends Component {
  @observable number = 0;
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { naver } = window;
    var mapDiv = document.getElementById('map');
    let map = new naver.maps.Map(mapDiv, {
      bounds: naver.maps.LatLngBounds.bounds(
        new naver.maps.LatLng(37.3585229, 127.1010728),
        new naver.maps.LatLng(37.3658036, 127.1222656)
      ),
      zoom: 10
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3613962, 127.1112487),
      map: map,
      title: 'Green',
      icon: {
        content: [
          '<div id="homeicon"></div>'
        ].join(''),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58),
      },
      draggable: true
    });

    const icon = this.homeIcon();
    ReactDOM.render(icon, document.getElementById('homeicon'))
  }

  homeIcon = () => {
    const { classes } = this.props;
    return (
      <div>
        <p className={classes.storeP}>가맹점</p>
        <Store className={classes.storeIcon} />
      </div>
    );
  }

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
  },
  storeIcon: {
    width: '2.5rem',
    height: '2.5rem',
    color: '#1D32B5'
  },
  storeP: {
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    color: '#1D32B5'
  }
});

export default withStyles(styles)(Map);
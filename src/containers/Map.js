import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppBar } from '../components';
import { NaverMap, SearchBox, StoreList } from '../components/Map';
import { withStyles, Grid, Paper, Icon } from '@material-ui/core';
// import { } from 'material-design-icons';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const { naver } = window;
    const { classes } = this.props;
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
      <Icon className={'fa fa-plus-circle'} />
      // <SvgIcon className={classes.homeIcon}>
      //   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      // </SvgIcon>
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
  homeIcon: {
    width: '2rem',
    height: '2rem'
  }
});

export default withStyles(styles)(Map);
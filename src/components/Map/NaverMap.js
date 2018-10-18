import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import { Store } from '@material-ui/icons';
@inject(({mapStore}) => ({
  companyAddress: mapStore.companyInfo.address,
  companyPoint: mapStore.companyInfo.point
}))
@observer
class NaverMap extends Component {
  @observable map = null;
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // this.mapBasic();
    return null;
  };
  mapBasic = () => {
    const { naver } = window;
    const { x, y } = this.props.companyPoint;
    const mapDiv = document.getElementById('map');
    this.map = new naver.maps.Map(mapDiv, {
      center: naver.maps.LatLng(x, y),
      zoom: 10
    });
    this.pointsMark();
  }

  pointsMark = () => {
    const { naver } = window;
    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3613962, 127.1112487),
      map: this.map,
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

  pointMover = () => {
    const { x, y } = this.props.companyPoint;
    const { naver } = window;
    const mapDiv = document.getElementById('map');
    const map = this.map;
    const addr = new naver.maps.Point(x, y);
    map.setCenter(addr);
    var marker = new naver.maps.Marker({
      position: addr,
      map: map
    });
  }
  

  componentDidMount() {
    this.mapBasic();
    
  }

  componentDidUpdate(prevProps, prevState) {
    this.pointMover();
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
    console.log('##### NaverMap render: ')
    return (
      <div>
        <div id="map" style={{width:'100%', height: '100vh'}} ></div>
      </div>
    );
  }
}

const styles = theme => ({
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

export default withStyles(styles)(NaverMap);
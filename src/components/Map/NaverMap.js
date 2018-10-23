import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import { Business, Store } from '@material-ui/icons';
const storegp = require('../../lib/storegp');

@inject(({mapStore}) => ({
  companyAddress: mapStore.companyInfo.address,
  companyPoint: mapStore.companyInfo.point,
  companyIcon: mapStore.companyInfo.icon
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

  storePoint = () => {
    const { naver } = window;
    const { content } = storegp;
    const bounds = this.map.getBounds();
    const southWest = bounds.getSW();
    const northEast = bounds.getNE();
    const lngSpan = northEast.lng() - southWest.lng();
    const latSpan = northEast.lat() - southWest.lat();
    content.forEach((item, idx) => {
      const position = new naver.maps.LatLng(item.gpslat, item.gpslon);
      // const marker = new naver.maps.Marker({
      //   map: this.map,
      //   position,
      //   title: `store-${idx}`,
      //   icon: {
      //     content: [
      //       `<div id=${id}></div>`
      //     ].join(''),
      //     size: new naver.maps.Size(38, 58),
      //     anchor: new naver.maps.Point(19, 58),
      //   }
      // });
      
    })
  }
  mapBasic = () => {
    const { naver } = window;
    const { classes } = this.props;
    const { x, y } = this.props.companyPoint;
    const mapDiv = document.getElementById('map');
    this.map = new naver.maps.Map(mapDiv, {
      center: naver.maps.LatLng(x, y),
      zoom: 10
    });

    const homeIcon = (
      <div>
        <p className={classes.storeP}>고객사</p>
        <Business className={classes.storeIcon} />
      </div>
    );

    this.pointsMark(new naver.maps.LatLng(37.3613962, 127.1112487), 'homeicon', homeIcon);
  }

  pointsMark = (position, id, icon) => {
    const { naver } = window;
    new naver.maps.Marker({
      position: position,
      map: this.map,
      title: 'Green',
      icon: {
        content: [
          `<div id=${id}></div>`
        ].join(''),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58),
      },
      draggable: true
    });

    ReactDOM.render(icon, document.getElementById(id))
  }

  // 해당 주소로 지도 이동
  pointMover = () => {
    const { companyPoint, companyIcon } = this.props;
    const { x, y } = companyPoint;
    const icon = companyIcon;
    const { naver } = window;
    const addr = new naver.maps.Point(x, y);
    this.map.setCenter(addr);
    this.pointsMark(addr, 'business', icon);
  }

  storeIcon = (idx) => {
    const { classes } = this.props;
    return (
      <div>
        <p className={classes.storeP}>{idx}</p>
        <Store className={classes.storeIcon} />
      </div>
    )
  }

  componentDidMount() {
    // 지도앱 로딩
    this.mapBasic(); 
  }

  componentDidUpdate(prevProps, prevState) {
    // 지도 이동
    this.pointMover();
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
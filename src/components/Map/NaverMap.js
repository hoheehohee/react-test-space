import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import { Business } from '@material-ui/icons';
const storegp = require('../../lib/storegp');

@inject(({mapStore}) => ({
  companyAddress: mapStore.companyInfo.address,
  companyPoint: mapStore.companyInfo.point,
  companyIcon: mapStore.companyInfo.icon,
  isMapFix: mapStore.isMapFix
}))
@observer
class NaverMap extends Component {
  @observable map = null;
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isMapFix: true
    };
  };

  static getDerivedStateFromProps(prevProps, prevState) {
    return null;
  };

  //초기 map Setting
  mapBasic = () => {
    const { naver } = window;
    const { classes } = this.props;
    const { x, y } = this.props.companyPoint;
    const mapDiv = document.getElementById('map');
    this.map = new naver.maps.Map(mapDiv, {
      center: naver.maps.LatLng(x, y),
      zoom: 10,   // 지도의 초기 줌 레벨
      minZoom: 10,  // 지도의 최소 줌 레벨
      maxZoom: 14,  // 지도의 최대 줌 레벨
      zoomControl: true, // 줌 컨트롤의 표시 여부
      zoomControlOptions: { //줌 컨트롤의 옵션
        position: naver.maps.Position.TOP_RIGHT
      }
    });

    const homeIcon = (
      <div>
        <p className={classes.storeP}>고객사</p>
        <Business className={classes.storeIcon} />
      </div>
    );

    this.pointsMark(new naver.maps.LatLng(37.3613962, 127.1112487), 'homeicon', homeIcon);
  }

  //모든 stroe 마크 표시
  storePoint = () => {
    const { naver } = window;
    const { content } = storegp;
    // const { classes } = this.props;
    const markers = [];
    content.forEach((item, idx) => {
      const position = new naver.maps.LatLng(item.gpslat, item.gpslon);
      const marker = new naver.maps.Marker({
        map: this.map,
        position,
        title: `store-${idx}`,
        // icon: {
        //   content: [
        //     `<div>
        //       <p className=${classes.storeP}>${idx}</p>
        //       <Store className=${classes.storeIcon} />
        //      </div>`
        //   ].join(''),
        //   size: new naver.maps.Size(38, 58),
        //   anchor: new naver.maps.Point(19, 58),
        // }
      });
      markers.push(marker);
    });
    // map 이벤트 리스너
    naver.maps.Event.addListener(this.map, 'idle', () => {
      this.updateMarkers(this.map, markers);
    });
  }

  updateMarkers = (map, markers) => {
    const mapBounds = map.getBounds();
    let marker;
    let position;
    markers.forEach((item) => {
      marker = item
      position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        this.showMarker(map, marker);
      } else {
        this.hideMarker(map, marker);
      }
    })
  }

  showMarker = (map, marker) => {
    if (marker.getMap()) return;
    marker.setMap(map);
  }
  hideMarker = (map, marker) => {
    if (!marker.getMap()) return;
    marker.setMap(null);
  }

  //마커 표시
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
      }
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

  componentDidMount() {
    // 지도앱 로딩
    this.mapBasic(); 
    this.storePoint();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isMapFix } = this.props;
    console.log('##### isMapFix: ', isMapFix);
    console.log('##### prevProps.isMapFix: ', prevProps.isMapFix)
    if (prevProps.isMapFix !== isMapFix) {
      this.map.setOptions({
        draggable: prevProps.isMapFix
      })
    }else{
      this.pointMover();
    }
    
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
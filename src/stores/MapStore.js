import { observable, action } from 'mobx';

export default class MapStore {
  @observable companyInfo = {
    address: 'test',
    point: { x: 37.3585229, y: 127.1010728},
    icon: null
  };
  @observable storeInfo = {};
  @observable isMapFix = false;

  constructor(root) {
    this.root = root;
  }

  @action
  setCompanyInfo = (info) => {
    const { address, point, icon } = info;
    this.companyInfo = {
      address,
      point,
      icon
    };
  };

  @action 
  setStoreInfo = (info) => {
    this.storeInfo = info;
  };

  @action
  setIsMapFix = () => {
    this.isMapFix = !this.isMapFix;
  }

};
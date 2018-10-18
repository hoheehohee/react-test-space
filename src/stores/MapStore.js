import { observable, action } from 'mobx';

export default class MapStore {
  @observable companyInfo = {
    address: 'test',
    point: { x: 37.3585229, y: 127.1010728}
  };
  @observable storeInfo = {};

  constructor(root) {
    this.root = root;
  }

  @action
  setCompanyInfo = (info) => {
    const { address, point } = info;
    this.companyInfo = {
      address,
      point
    };
  };

  @action 
  setStoreInfo = (info) => {
    this.storeInfo = info;
  };

};
import MapStore from './MapStore';

class RootStore {
  constructor() {
    this.mapStore = new MapStore(this);
  }
}

export default RootStore;
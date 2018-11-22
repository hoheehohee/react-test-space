import MapStore from './MapStore';
import Counter from './counter';

class RootStore {
  constructor() {
    this.mapStore = new MapStore(this);
    this.counter = new Counter(this);
  }
}

export default RootStore;
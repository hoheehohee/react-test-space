import MapStore from './MapStore';
import Counter from './counter';
import Market from './market';

class RootStore {
  constructor() {
    /**
     * this 파라미터를 넣어주는 이유:
     * 각 스토어들이, 현재 루트 스토어가 무엇인지 알 수 있게 된다.
     */
    this.mapStore = new MapStore(this);
    this.counter = new Counter(this);
    this.market = new Market(this);
  }
}

export default RootStore;
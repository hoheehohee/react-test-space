import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  /**
   * 각 스토어를 만들 때 루트 스토어를 파라미터로 넣어 주었으니,( ./index.js ==> this.market(this))
   * 이를 따로 값으로 저장해두게 끔 추가한다.
   */
  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    /**
     * 스토어끼리 관계를 형성 했기 때문에(RootStore)
     * count.js store에 접근 가능
     */
    const { number } = this.root.counter;
    // 존재하는지.
    const exists = this.selectedItems.find(item => item.name === name); // 존재하면 해당 객체를 반환
    // 존재하지 않는다면 새로 집어 넣는다.
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        // count: 1
        count: number
      });
      return;
    }
    // 존재 한다면 count 값만 올린다.
    // exists.count++;
    // number 값이 2이면 한번 상품이 클릭 될 때마다 두개씩 받아 온다.
    exists.count += number;
  };

  @action
  take = (name) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      // 갯수가 0이면
      this.selectedItems.remove(itemToTake);  // 배열에서 제거
    }
  };

  /**
   * computed: observable 값이 파생되는, 특별히 계산된 결과가 필요한 경우에 사용한다.
   * Observable 값이 스프레드시트에 있는 데이터이고, Computed는 일종의 수식이다.
   */
  @computed
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
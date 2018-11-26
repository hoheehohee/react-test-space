import { observable, action } from 'mobx';

/**
 * Mobx 스토어
 * redux 처럼 리듀서나, 액션 생성함수.. 그런거 없다.
 * 그냥 하나의 클래스에 observable 값이랑 함수들을 만들어주면 끝.
 */
export default class CounterStore {
  @observable number = 1;

  /**
   * 각 스토어를 만들 때 루트 스토어를 파라미터로 넣어 주었으니,
   * 이를 따로 값으로 저장해두게 끔 추가한다.
   */
  constructor(root) {
    this.root = root;
  }
  
  @action
  increase = () => this.number++;

  @action
  decrease = () => this.number--;
}
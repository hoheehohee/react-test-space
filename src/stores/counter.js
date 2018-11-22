import { observable, action } from 'mobx';

/**
 * Mobx 스토어
 * redux 처럼 리듀서나, 액션 생성함수.. 그런거 없다.
 * 그냥 하나의 클래스에 observable 값이랑 함수들을 만들어주면 끝.
 */
export default class CounterStore {
  @observable number = 0;
  
  @action
  increase = () => this.number++;

  @action
  decrease = () => this.number--;
}
import React from 'react';
import { inject, observer } from 'mobx-react';
import BasketItem from './BasketItem';

const BasketItemList = ({ items, onTake }) => {
  const itemList = items.map(item => (
    /**
     * 주의
     * 리스트를 렌더링 할 때 내부에 있는 컴포넌트(BasketItem)에도 observer를 구현해주어야,
     * 성능적으로 최적화가 일어난다는 점!
     */
    // <BasketItem
    //   name={item.name}
    //   price={item.price}
    //   count={item.count}
    //   key={item.name}
    //   onTake={onTake}
    // />
    /**
     * 세부참조(dereference)는 최대한 늦게 하자.
     * 세부참초란, 우리가 특정 객체의 내부의 값을 조회하는것.
     * 위의 코드는 count 값의 세부참조를 우리는 BasketItem 컴포넌트 내부에서 하게 된다면,
     * 더 높은 성능으로 컴포넌트를 업데이트 할 수 있다.
     * item.name 값은 바뀌지 않기 때문에 key 설정 부분에선 문제가 되지 않는다.
     */
    <BasketItem item={item} key={item.name} onTake={onTake} />
  ));
  return (
    <div>
      {itemList}
    </div>
  )
};

export default inject(({market}) => ({
  items: market.selectedItems,
  onTake: market.take
}))(observer(BasketItemList));
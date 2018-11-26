import React from 'react';
import { inject, observer } from 'mobx-react';
import BasketItem from './BasketItem';

const BasketItemList = ({ items, total, onTake }) => {
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
     */
    <BasketItem
      item={item}
      key={item.name}
      onTake={onTake}
    />
  ));
  return (
    <div>
      {itemList}
      <hr/>
      <p>
        <b>총합: </b>{total}원
      </p>
    </div>
  )
};

export default inject(({market}) => ({
  items: market.selectedItems,
  total: market.total,
  onTake: market.take
}))(observer(BasketItemList));
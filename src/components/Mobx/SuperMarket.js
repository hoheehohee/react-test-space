import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

/**
 * Basket과 ShopItemList를 전달해서 보여줄 것.
 */
const SuperMarket = () => (
  <SuperMarketTemplate 
    items={<ShopItemList />} 
    basket={<BasketItemList />} 
    total={<TotalPrice />}
  />
);

export default SuperMarket;
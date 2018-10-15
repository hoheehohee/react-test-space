import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styled from 'styled-components';
import SortableComponent from './SortableComponent';

const SortableItem = SortableElement(({value, items, itemsChange}) => {

  return (
    <div>
      <ItemDiv>
        <span>{value.name}</span>
      </ItemDiv>
      {
        value.items
        ? <SortableComponent items={value.items} itemsChange={itemsChange}/>
        : null
      }
    </div>
  )
});

const ItemDiv = styled.div`
  height: 59px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #333;
  font-weight: 400;
  position: relative;
  border-bottom: 1px solid #999;
`

export default SortableItem;

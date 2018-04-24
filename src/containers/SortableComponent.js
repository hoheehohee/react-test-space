import React, { Component } from 'react';
import styled from 'styled-components';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { SortableItem } from '../containers';

const SortableList = SortableContainer(({items, itemsChange}) => {
  return (
    <ItemList>
      {items.map((value, index) => {
        return(<SortableItem key={`item-${index}`} index={index} value={value} itemsChange={itemsChange}/>)
      })}
    </ItemList>
  );
});

class SortableComponent extends Component {

  state = {
    items: this.props.items
  }

  componentWillUnmount() {
    console.log('###### componentWillUnmount : ');
  }

  onSortEnd = ({oldIndex, newIndex}) => {

    const { itemsChange } = this.props;
    console.log('###### itemsChange : ', this.props);
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    itemsChange(this.state.items);

  };

  render() {
    return (
      <ContentWrapper>
        <SortableList
          items={this.state.items}
          onSortEnd={this.onSortEnd}
          itemsChange={this.props.itemsChange}
        />
      </ContentWrapper>
    );
  }
}

const ContentWrapper = styled.div`
  display: table;
  margin: 0 auto;

  & > div > em {
    display: block;
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #888;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
    line-height: 1.3;
    font-style: normal;

    a {
        color: inherit;
    }
  }
`
const ItemList = styled.div`
  position: relative;
  z-index: 0;
  background-color: #f3f3f3;
  border: 1px solid #efefef;
  border-radius: 3px;
  outline: none;
  width: 400px;
  height: auto;
  max-height: 600px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #999;
`

export default SortableComponent;

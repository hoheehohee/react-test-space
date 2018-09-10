import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { SortableComponent } from './components';


class Sortable extends Component {

  state = {
    items: [
      {
        name: 'Item 1',
        items: [
          { name: 'ItemDept2-1' },
          {
            name: 'ItemDept2-3',
            items: [
              { name: 'ItemDept3-1' },
              { name: 'ItemDept3-3' },
              { name: 'ItemDept3-4' }
            ]
          },
          { name: 'ItemDept2-4' }
        ]
      },
      { name: 'Item 2' },
      {
        name: 'Item 3',
        items: [
          { name: 'ItemDept2-1' },
          { name: 'ItemDept2-3' },
          { name: 'ItemDept2-4' }
        ]
      },
      { name: 'Item 4' },
      { name: 'Item 5' },
      { name: 'Item 6' },
    ]
  };

  render() {
    return (
      <div className="Sortable">
        <Root>
          <SortableComponent items={this.state.items} itemsChange={this.itemsChange} />
        </Root>
      </div>
    );
  }
}

const Root = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  min-height: cale(100vh - 60px);
  padding: 10px 0;
  border: 0;
  box-sizing: border-box;
`
export default Sortable;

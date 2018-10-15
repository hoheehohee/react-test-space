import React, { Component } from 'react';
import { withStyles, List, ListItem } from '@material-ui/core';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value, classes, number }) => {
  return (
    <ListItem className={classes.li}>
      <div>{`${number+1}. ${value}`}</div>
    </ListItem>
  )
});
const SortableList = SortableContainer(({ items, classes }) => {
  return (
    <ul className={classes.ul}>
      {items.map((value, index) => (
        <SortableItem classes={classes} key={`item-${index}`} index={index} number={index} value={value} />
      ))}
    </ul>
  );
});

class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Item', 'Item', 'Item', 'Item', 'Item', 'Item',
        'Item', 'Item', 'Item', 'Item', 'Item', 'Item',
        'Item', 'Item', 'Item', 'Item', 'Item', 'Item',
      ],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <SortableList classes={classes} items={this.state.items} onSortEnd={this.onSortEnd} />
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    innerHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  li: {
    borderBottom: '1px solid #ededef'
  },
  ul: {
    paddingLeft: 0
  }
});

export default withStyles(styles)(StoreList);
import React from 'react';
import { withStyles } from '@material-ui/core';

const ShopItem = ({ classes, name, price, onPut }) => (
  <div className={classes.shopItem} onClick={() => onPut(name, price)}>
    <h4>{name}</h4>
    <div>{price}원</div>
  </div>
);

const styles = theme => ({
  shopItem: {
    background: 'white',
    border: '1px solid #495057',
    padding: '0.5rem',
    borderRadius: 2,
    cursor: 'pointer',
    '& h4': {
      marginTop: 0,
      marginBottom: '1rem'
    },
    '&:hover': {
      background: '#495057',
      color: 'white'
    },
    '& + div': {
      marginTop: '1rem'
    }
  }
});

export default withStyles(styles)(ShopItem);
import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core';

const BasketItem = ({classes, item, onTake}) => {
  return (
    <div className={classes.basketItem} >
      <div className={classes.name}>{item.name}</div>
      <div className={classes.price}>{item.price}원</div>
      <div className={classes.count}>{item.count}</div>
      <div className={classes.return} onClick={() => onTake(item.name)}>갖다놓기</div>
    </div>
  )
};

const styles = (theme) => ({
  basketItem: {
    display: 'flex',
    width: '100%',
    '& + div': {
      marginTop: '1rem'
    }
  },
  name: { flex: 2 },
  price: { flex: 1 },
  count: { flex: 1 },
  return: {
    marginLeft: 'auto',
    color: '#f06595',
    cursor: 'pointer',
    '&:hover' : { textDecoration: 'underline' }
  }
});
/**
 * 주의
 * 리스트를 렌더링 할 때 내부에 있는 컴포넌트에도 observer를 구현해주어야,
 * 성능적으로 최적화가 일어난다는 점!
 */
export default withStyles(styles)(observer(BasketItem));

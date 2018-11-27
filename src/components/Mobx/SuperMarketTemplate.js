import React from 'react';
import { withStyles } from '@material-ui/core';

/**
 * 한쪽에는 상품, 한쪽에는 장바구니를 props로 받아와서 보여준다.
 */

const SuperMarketTemplate = ({classes, items, basket, total}) => {
  return (
    <div className={classes.superMarketTemplate}>
      <div className={classes.items_wrapper}>
        <h2>상품</h2>
        {items}
      </div>
      <div className={classes.basket_wrapper}>
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

/**
 * flex: 엘리먼트들의 크기나 위치를 쉽게 잡아주는 도구.
 * flex를 사용하기 위해서는 컨테이너 태그에 display:flex 속성을 부여.
 * 또한 flex-direction을 이용해서 정렬방향을 바꿀 수 있다.
 */
const styles = theme => ({
  superMarketTemplate: {
    width: 768,
    display: 'flex',
    border: '1px solid black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    '& h2': {
      marginTop: 0
    },
    '& > div': {
      padding: '1rem',
      flex: 1
    }
  },
  items_wrapper: {
    background: '#f8f9fa'
  }
});

export default withStyles(styles)(SuperMarketTemplate);
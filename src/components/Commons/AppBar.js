import React from 'react';
import {
  withStyles,
  AppBar as MuAppBar,
  Toolbar,
<<<<<<< HEAD
  Typography,
=======
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
  Button,
  IconButton
} from '@material-ui/core';

<<<<<<< HEAD
const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const AppBar = ({classes}) => {
  return (
    <div className={classes.root}>
      <MuAppBar position="static">
=======
const AppBar = ({classes, title}) => {
  return (
    <div className={classes.root}>
      <MuAppBar position="static" className={classes.appbar}>
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
<<<<<<< HEAD
          <Typography variant="title" color="inherit" className={classes.flex}>
          Title
          </Typography>
=======
          <h2 variant="title" color="inherit" className={classes.flex}>
          {title}
          </h2>
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuAppBar>
    </div>
  );
};

<<<<<<< HEAD
=======
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: '#1DB53A'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
export default withStyles(styles)(AppBar);

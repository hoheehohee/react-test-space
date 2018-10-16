import React from 'react';
import {
  withStyles,
  AppBar as MuAppBar,
  Toolbar,
  Button,
  IconButton
} from '@material-ui/core';

const AppBar = ({classes, title}) => {
  return (
    <div className={classes.root}>
      <MuAppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <h2 variant="title" color="inherit" className={classes.flex}>
          {title}
          </h2>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuAppBar>
    </div>
  );
};

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

export default withStyles(styles)(AppBar);

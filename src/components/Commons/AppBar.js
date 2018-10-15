import React from 'react';
import {
  withStyles,
  AppBar as MuAppBar,
  Toolbar,
  Button,
  IconButton
} from '@material-ui/core';

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
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <h2 variant="title" color="inherit" className={classes.flex}>
          Title
          </h2>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuAppBar>
    </div>
  );
};

export default withStyles(styles)(AppBar);

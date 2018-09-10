import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  AppBar as MuAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from 'material-ui';
// import MenuIcon from 'material-ui/icons/Menu';

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
          <Typography variant="title" color="inherit" className={classes.flex}>
          Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuAppBar>
    </div>
  );
};

export default withStyles(styles)(AppBar);

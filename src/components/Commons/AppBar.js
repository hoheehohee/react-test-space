import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import {
	AppBar as MU_AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from 'material-ui';
// import MenuIcon from 'material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class AppBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return(
			<div className={classes.root}>
	      <MU_AppBar position="static">
	        <Toolbar>
	          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
	            {/* <MenuIcon /> */}
	          </IconButton>
	          <Typography variant="title" color="inherit" className={classes.flex}>
	            Title
	          </Typography>
	          <Button color="inherit">Login</Button>
	        </Toolbar>
	      </MU_AppBar>
	    </div>
		);
	}
}

export default withStyles(styles)(AppBar);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  Grid,
  Paper,
  withStyles
} from '@material-ui/core'

const styles = theme => ({
  root: {
  flexGrow: 1
  },
  paper: {
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    padding: 0
  },
  item: {
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 5
  }
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Link to='/FormsyReact'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button >
                    FormsyReact
                  </ListItem>
                </List>
              </Paper>
            </Link>
            <Link to='/MaterialUI'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button>
                    MaterialUI
                  </ListItem>
                </List>
              </Paper>
            </Link>
            <Link to='/ReactInfinite'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button>
                    ReactInfinite
                  </ListItem>
                </List>
              </Paper>
            </Link>
            <Link to='/JSON'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button>
                    JSON
                  </ListItem>
                </List>
              </Paper>
            </Link>
            <Link to='/Pose'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button>
                    Map
                  </ListItem>
                </List>
              </Paper>
            </Link>
            <Link to='/EmailSend'>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  <ListItem className={classes.item} button>
                    EmailSend
                  </ListItem>
                </List>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
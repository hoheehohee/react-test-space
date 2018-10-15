import React, { Component } from 'react';
import { withStyles, Grid, Paper, TextField, FormControlLabel, Checkbox } from '@material-ui/core';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.root} >
            <form className={classes.container} noValidate autoComplete="off">
              <FormControlLabel 
                label={'제휴점'}
                labelPlacement={'start'}
                control={
                  <TextField
                    id="outlined-name"
                    label="주소"
                    className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkBoxField}
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="지도 고정"
              />
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    height: 80,
    // paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 10,
    marginTop: 10
  },
  checkBoxField: {
    marginLeft: theme.spacing.unit*2
  }
});

export default withStyles(styles)(SearchBox);
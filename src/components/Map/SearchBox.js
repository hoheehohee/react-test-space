import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withStyles, Grid, Paper, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { Business } from '@material-ui/icons';

@inject(({ mapStore }) => ({
  setCompanyInfo: mapStore.setCompanyInfo,
  setIsMapFix: mapStore.setIsMapFix
}))
@observer
class SearchBox extends Component {
  @observable address = null;

  addressSearch = () => {
    const { naver } = window;
    naver.maps.Service.geocode({address: this.address}, (status, response) => {
      if(status !== naver.maps.Service.Status.OK) {
        console.log('#### map service Error');
        return;
      }
      const result = response.result.items[0];
      const { classes } = this.props;
      result.icon = (
        <div>
          <p className={classes.storeP}>고객사</p>
          <Business className={classes.storeIcon} />
        </div>
      )
      this.props.setCompanyInfo(result);
    })
  }

  @action
  handleChange = (e, target) => {
    this[target] = e.target.value;
  }
  handleChecked = (e) => {
    this.props.setIsMapFix();
  }

  handleAction = (e, target) => {
    if(target === 'address') {
      this.addressSearch();
    }
  }
  
  render() {
    console.log('##### SearchBox render: ')
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.root} >
            <form className={classes.container} noValidate autoComplete="off">
              <FormControlLabel 
                label={'고객사'}
                labelPlacement={'start'}
                control={
                  <TextField
                    id="outlined-name"
                    label="주소"
                    className={classes.textField}
                    onChange={(e) => this.handleChange(e, 'address')}
                    value={this.address}
                    margin="normal"
                    variant="outlined"
                  />
                }
              />
              <Button
                variant="contained"
                color="primary"
                disableRipple
                className={classes.button1}
                onClick={(e) => this.handleAction(e, 'address')}
              >
                검색
              </Button>
              <FormControlLabel
                className={classes.checkboxLabel}
                control={
                  <Checkbox
                    className={classes.checkboxField}
                    // checked={this.state.checkedB}  
                    onChange={this.handleChecked}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="지도 고정"
              />
              <FormControlLabel
                label={'가맹점'}
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
              <Button
                variant="contained"
                color="primary"
                disableRipple
                className={classes.button1}
              // className={classNames(classes.margin, classes.bootstrapRoot)}
              >
                검색
              </Button>
              <Button
                variant="contained"
                color="primary"
                disableRipple
                className={classes.button2}
                // className={classNames(classes.margin, classes.bootstrapRoot)}
              >
                추가
              </Button>
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
  checkboxLabel: {
    borderRight: '2px solid #6b6b6b',
    paddingRight: theme.spacing.unit * 2,
    margin: 0,
    marginTop: 5
  },
  checkboxField: {
    marginLeft: theme.spacing.unit*2
  },
  button1: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 1.2,
    height: theme.spacing.unit * 7,
    width: theme.spacing.unit * 10,
    fontSize: 16,
    background: '#A6A6A6',
    '&:hover': { background: '#707371' }
  },
  button2: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 1.2,
    height: theme.spacing.unit * 7,
    width: theme.spacing.unit * 20,
    fontSize: 16,
    background: '#19A333',
    '&:hover': { background: '#1DB53A' }
  },
  storeIcon: {
    width: '2.5rem',
    height: '2.5rem',
    color: '#1D32B5'
  },
  storeP: {
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    color: '#1D32B5'
  }
});

export default withStyles(styles)(SearchBox);
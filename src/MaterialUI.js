import React, { Component } from 'react';
import styled from 'styled-components';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { TextField } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import { LeftPane, RightPane, AppBar } from './components';
// import { SampleProvider } from './contexts/Sample';
import { SampleHoCProvider } from './contexts/SampleHOC';

class MaterialUI extends Component {

  render() {

    const theme = createMuiTheme();

    return (
      //<SampleProvider>
      <SampleHoCProvider>
        <MuiThemeProvider theme={theme}>
          <AppBar classes={{ root: 'AppBar', menuButton: "MU_button"}}/>
          <StyledMain>
            <GridList cols={4}>
              <GridListTile>
                <LeftPane />
              </GridListTile>
              <GridListTile>
                <RightPane />
              </GridListTile>
            </GridList>
          </StyledMain>
        </MuiThemeProvider>
      </SampleHoCProvider>
      //</SampleProvider>
    );
  }
}

const StyledAppBar = styled(TextField)`
  border: 1px solid #000000
`

const StyledMain = styled.div`
  margin: 30px 30px;
`

export default MaterialUI;

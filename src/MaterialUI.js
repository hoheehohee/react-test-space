import React, { Component } from 'react';
import styled from 'styled-components';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { TextField } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import { LeftPane, RightPane, Counter, AppBar, DaumMapForm } from './components';
// import { SampleProvider } from './contexts/Sample';
import { SampleHoCProvider } from './contexts/SampleHOC';
import { AnotherProvider } from './contexts/Another';
import axios from 'axios';
// import config from 'config';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement( context, {
    children: prev
  }),
  children
)

class MaterialUI extends Component {


  componentDidMount() {
    const params = {
      autoload: false
    }
  }

  loadScript = (src) => {
    const tag = document.createElement('script');
    const body = document.getElementsByTagName('body')[0];
    tag.async = false;
    tag.src = src;
    if(body) {
      body.appendChild(tag);
    }
  }


  render() {
    const theme = createMuiTheme();

    return (
      //<SampleProvider>
      <AppProvider
        contexts={[SampleHoCProvider, AnotherProvider]}
      >
        <MuiThemeProvider theme={theme}>
          <AppBar classes={{ root: 'AppBar', menuButton: "MU_button"}}/>
          <StyledMain>
            <GridList cols={3}>
              <GridListTile>
                <LeftPane />
              </GridListTile>
              <GridListTile>
                <RightPane />
              </GridListTile>
              <GridListTile>
                <Counter />
              </GridListTile>
            </GridList>
            <DaumMapForm />
          </StyledMain>
        </MuiThemeProvider>
      </AppProvider>
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

import React, { Component } from 'react';
import styled from 'styled-components';

import { 
  MuiThemeProvider, 
  createMuiTheme,
  GridList,
  GridListTile
 } from '@material-ui/core';
import { LeftPane, RightPane, Counter, AppBar, DaumMapForm } from '../components';
import { SampleHoCProvider } from '../contexts/SampleHOC';
import { AnotherProvider } from '../contexts/Another';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement( context, {
    children: prev
  }),
  children
)

class MaterialUI extends Component {

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
<<<<<<< HEAD
    const theme = createMuiTheme();
=======
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
    });
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240

    return (
      //<SampleProvider>
      <AppProvider
        contexts={[SampleHoCProvider, AnotherProvider]}
      >
        <MuiThemeProvider theme={theme}>
          <AppBar classes={{ root: 'AppBar', menuButton: "MU_button" }}/>
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

const StyledMain = styled.div`
  margin: 30px 30px;
`;

export default MaterialUI;



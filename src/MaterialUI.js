import React, { Component } from 'react';
import styled from 'styled-components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, GridList, GridTile } from 'material-ui';
import { LeftPane, RightPane } from './components';
import { SampleProvider } from './contexts/Sample';

class MaterialUI extends Component {
  render() {
    return (
      <SampleProvider>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <StyledMain>
              <TextField name="text filed" hintText="Hint Text"/>
              <GridList className="panes">
                <GridTile>
                  <LeftPane />
                </GridTile>
                <GridTile>
                  <RightPane />
                </GridTile>
              </GridList>
            </StyledMain>
          </div>
        </MuiThemeProvider>
      </SampleProvider>
    );
  }
}

const StyledAppBar = styled(TextField)`
  border: 1px solid #000000
`

const StyledMain = styled.div`
  margin: 10px 20px;
`

export default MaterialUI;

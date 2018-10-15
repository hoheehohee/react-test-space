import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider, CssBaseline} from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();

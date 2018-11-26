import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
=======
// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react' // Mobx 에서 사용하는 Provider
import { createMuiTheme, MuiThemeProvider, CssBaseline} from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import RootStore from './stores'; // 루트 스토어 생성

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
});

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}> 
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>,
>>>>>>> c604acce62cba7906b4c6f12f5b6211055cfa240
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

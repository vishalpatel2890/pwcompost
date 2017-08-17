import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './index.css';
import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = configureStore()


render(
  <BrowserRouter >
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import  StyleGlobal  from './style/StyleGlobal';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <StyleGlobal/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {
  RecoilRoot,
  
} from 'recoil';
// import './assets/styles/style.scss';
// import './assets/styles/style.css';
// import './index.scss'

ReactDOM.render((
  <RecoilRoot>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </RecoilRoot>
  
), document.getElementById('root'));


// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
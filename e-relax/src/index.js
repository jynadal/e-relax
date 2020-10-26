import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';

import './assets/css/bootstrap.min.css';
//import './assets/css/core.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/font-awesome.min.css';
import './assets/css/default.css';
// import './assets/css/material-design-iconic-font.min.css';
// import './assets/plugins/animate.css';
// import './assets/plugins/animated-headlines.css';
// import './assets/plugins/nivo-slider.css';
// import './assets/plugins/owl.carousel.css';
//import './js/jquery.nivo.slider.pack.js"';
//import './js/main.js"';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

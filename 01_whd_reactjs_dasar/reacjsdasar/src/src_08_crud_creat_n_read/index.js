import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Variable from './reactjsdasar/Variable';
// import StateProps from './reactjsdasar/StateProps';
// import Map from './reactjsdasar/Map';
// import Lifecycle from './reactjsdasar/Lifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud/index';

ReactDOM.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>,
  document.getElementById('root')
);
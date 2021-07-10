import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "bootstrap";
import { InputTask } from "./component/App.js"

ReactDOM.render(
  <React.StrictMode>
    <InputTask />
  </React.StrictMode>,
  document.getElementById('root')
);

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';


const element = <h1> Hello React</h1>;


ReactDOM.render(
  <Main />,
  document.getElementById('app')
  );

console.log('Hello React');

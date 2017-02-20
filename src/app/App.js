import React from 'react';
import ReactDOM from 'react-dom';

export default class App {
  start() {
    ReactDOM.render(
      <div className="start"></div>,
      document.getElementById('app')
    )
  }
}
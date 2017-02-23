import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

window.onload = () => {
    ReactDOM.render(
        <App hello="world"/>,
        document.getElementById('app')
    );
};
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import Route from './route/Route.jsx';
import ContextProvider from './component/contextProvider/ContextProvider.jsx';

import styles from './style/main.css';
import grid from './style/component/grid.css';

export default class App extends Component {
    render() {
        return (
            <ContextProvider grid={grid}>
                <Route history={browserHistory}/>
            </ContextProvider>
        )
    }
}
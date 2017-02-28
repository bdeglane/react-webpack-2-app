import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import cx from 'classnames';
import Route from './route/Route.jsx';
import ContextProvider from './component/contextProvider/ContextProvider.jsx';
import Layout from './component/layout/Layout.jsx';

import styles from './style/main.css';
import grid from './style/component/grid.css';

export default class App extends Component {
    render() {
        return (
            <ContextProvider grid={grid}>
                <Route history={browserHistory}/>
                {/*<Layout>
                 <div className={cx(grid.block, styles.app)}>
                 <h1 className={styles.title}>Hello {this.props.hello}!</h1>
                 </div>
                 </Layout>
                 </Route>*/}
            </ContextProvider>
        )
    }
}

App.propTypes = {
    hello: PropTypes.string.isRequired
};
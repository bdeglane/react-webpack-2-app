import React, {Component, PropTypes} from 'react';

import styles from './style/main.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <h1>Hello {this.props.hello}!</h1>
            </div>
        )
    }
}

App.propTypes = {
    hello: PropTypes.string.isRequired
};
import React, {Component, PropTypes} from 'react';
import cx from'classnames';

import styles from './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className={cx(styles.header)}>
            </header>
        )
    }
}

Header.propTypes = {};
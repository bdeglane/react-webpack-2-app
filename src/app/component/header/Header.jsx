import React, {Component, PropTypes} from 'react';
import cx from'classnames';

import grid from '../../style/component/grid.css';
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
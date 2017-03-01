import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FA from 'react-fontawesome';
import cx from'classnames';

import styles from './Header.css';

export default class Header extends Component {
    render() {
        const {grid} = this.context;
        return (
            <header className={cx(grid.block, grid.shrink, styles.header)}>
                <div className={cx(grid.block, grid.shrink)}>
                    <Link to="/"
                          className={styles.menuLink}>
                        <FA className={styles.brand}
                            name="rocket"/>
                    </Link>
                </div>
                <div className={cx(grid.block, styles.menu)}>
                    <Link to="/"
                          className={styles.menuLink}>Home</Link>
                </div>
            </header>
        )
    }
}

Header.propTypes = {};
Header.contextTypes = {
    grid: PropTypes.object
};
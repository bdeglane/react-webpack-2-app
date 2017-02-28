import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import cx from'classnames';

import styles from './Header.css';

export default class Header extends Component {
    render() {
        const {grid} = this.context;
        return (
            <header className={cx(grid.block, styles.header)}>
                <div className={cx(grid.block, grid.shrink)}></div>
                <div className={cx(grid.block, styles.menu)}>
                    <Link to="/">Home</Link>
                </div>
            </header>
        )
    }
}

Header.propTypes = {};
Header.contextTypes = {
    grid: PropTypes.object
};
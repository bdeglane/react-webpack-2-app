import React, {Component, PropTypes} from 'react'
import cx from 'classnames';

import grid from '../../style/component/grid.css';

export default class Layout extends Component {
    render() {
        return (
            <div className={grid.frame}>
                <div className={cx(grid.vertical, grid.block)}>
                    <div className={cx(grid.shrink, grid.block)}>
                    </div>
                    <div className={grid.block}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
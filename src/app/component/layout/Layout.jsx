import React, {Component, PropTypes} from 'react'
import cx from 'classnames';
import Header from '../header/Header.jsx';

export default class Layout extends Component {
    constructor(props, context) {
        super(props, context);
        this.grid = context.grid;
    }

    render() {
        const {grid} = this.context;
        return (
            <div className={grid.frame}>
                <div className={cx(grid.vertical, grid.block)}>
                    <div className={cx(grid.shrink, grid.block)}>
                        <Header/>
                    </div>
                    <div className={grid.block}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Layout.contextTypes = {
    grid: PropTypes.object
};
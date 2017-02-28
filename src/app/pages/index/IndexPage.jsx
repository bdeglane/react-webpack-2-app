import React, {Component, PropTypes} from 'react';

export default class IndexPage extends Component {
    render() {
        const {grid} = this.context;
        return (
            <div className={grid.block}>
            </div>
        )
    }
}

IndexPage.propTypes = {};
IndexPage.contextTypes = {
    grid: PropTypes.object
};

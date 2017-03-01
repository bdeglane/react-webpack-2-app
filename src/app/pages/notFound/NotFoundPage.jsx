import React, {Component, PropTypes} from 'react';

export default class NotFoundPage extends Component {
    render() {
        const {grid}=this.context;
        return (
            <div className={grid.block}>
                <div className={grid.content}>
                    <h1>Not Found</h1>
                </div>
            </div>
        )
    }
}

NotFoundPage.propTypes = {};
NotFoundPage.contextTypes = {
    grid: PropTypes.object
};
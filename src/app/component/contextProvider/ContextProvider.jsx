import React, {Component, PropTypes} from 'react';

export default class ContextProvider extends Component {
    getChildContext() {
        return {
            grid: this.props.grid
        };
    }

    render() {
        return this.props.children;
    }
}

ContextProvider.propTypes = {
    grid: PropTypes.object
};

ContextProvider.childContextTypes  = {
    grid: PropTypes.object
};
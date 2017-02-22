import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="start">
                <h1>Hello {this.props.hello}!</h1>
            </div>
        )
    }
}
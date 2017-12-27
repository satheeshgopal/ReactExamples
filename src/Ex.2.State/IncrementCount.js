import React from 'react';

export default class IncrementCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => { 
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                Count {this.state.count}
                <button onClick={this.increment}> Add + </button>
            </div>
        );
    }
}
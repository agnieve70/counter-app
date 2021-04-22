import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    handleIncrement = id =>
    {
        console.log(id);
        this.setState({value : this.state.value+ 1});
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";

        return (
            <div>
                <span className={ classes }>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement(1) } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount()
    {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
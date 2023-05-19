import React, {Component} from 'react';

class Child extends Component {

    componentWillUnmount() {
        alert("The Component removed")
    }

    render() {
        return (
            <div>
                <h2>Child Component</h2>
            </div>
        );
    }
}

export default Child;
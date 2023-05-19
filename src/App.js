import './App.css';

import React, {Component} from 'react';
import Child from "./Child";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.removeChild = this.removeChild.bind(this);
        this.state = {
            counter: 0,
            show: true,
        };
    }

    componentDidMount() {
        window.setTimeout(this.handleClick, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.counter > 5) {
            this.setState({
                counter: 0
            })
        }
    }

    componentWillUnmount() {

    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
        window.setTimeout(this.handleClick, 1000)
    }

    removeChild() {
        this.setState({
                show: false,
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                {this.state.show ? <Child/> : null}
                <button onClick={this.removeChild}>Remove Child</button>
            </div>
        );
    }
}

export default App;

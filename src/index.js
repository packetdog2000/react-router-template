import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    render(){
        return (
        <div>
            <h1>React JS Template</h1>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

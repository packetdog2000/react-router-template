import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import Links from './components/links';
import Home from './components/home';
import About from './components/about';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    render(){
        return (
        <Router history={ hashHistory }>
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </Router>
        );
    }
}

export default App;

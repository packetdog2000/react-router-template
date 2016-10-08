import React, { Component } from 'react';
import Links from  './links';

class  Home extends Component {
    render () {
        return (
            <div><Links />
            <h1>Home</h1>
            <h2>Hello World!!</h2>
            <button className="btn btn-success"> Start</button>
            </div>
        )
    }
}

export default Home;

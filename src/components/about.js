import React, { Component } from 'react';
import Links from  './links';

class About extends Component {
    render () {
        return (
            <div><Links />
            <h1>About</h1>
            <h2>We are the best!!</h2>
            <button className="btn btn-success"> End</button>
            </div>
        )
    }
}

export default About;

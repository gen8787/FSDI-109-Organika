import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.css';

class About extends Component {
    state = {

    }
    render() {
        return (
            <div className="about p-4 m-5">
                <h1 className="display-1">About Organkia</h1>
                <img src="/oka.png" width="250" alt=""></img>
                <h1 className="display-5">We source our products from local farmers near you to deliver you the freshest products right away.</h1>
                <button className="btn btn-lg btn-success mt-3"><Link to="/store" className="text-decoration-none text-reset">View Products</Link></button>
            </div>
        );
    }
}

export default About;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

class LandingPage extends Component {
    state = {

    }
    render() {
        return (
            <div className=" landing p-4 m-5">
                <h1 className="display-1">Welcome to Organika</h1>
                <img src="/oka.png" width="350" alt=""></img>
                <h1 className="display-5">locally sourced products straight to your door</h1>
                <button className="btn btn-lg btn-success mt-3"><Link to="/store" className="text-decoration-none text-reset">View Products</Link></button>
            </div>

        );
    }
}

export default LandingPage;
import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer-text py-3">
                <img src="/oka.png" width="150" height="150" alt=""></img>
                <p>Thank you for shopping at Organkia</p>
            </div>
        );
    }
}

export default Footer;
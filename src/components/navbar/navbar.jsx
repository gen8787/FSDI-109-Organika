import React, { Component } from "react"; // imrc
import { Link } from "react-router-dom";

// cc
class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3" style={{ backgroundColor: "rgb(22 94 106)" }}>
        <Link className="navbar-brand" to="/">
          <img src="/oka.png" width="30" height="30" className=" mr-1 d-inline-block align-top" alt=""></img>
            Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/store">
              Store
            </Link>
            <Link className="nav-item nav-link" to="/list">
              Grocery List
            </Link>
            <Link className="nav-item nav-link" to="/">
              Cart
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

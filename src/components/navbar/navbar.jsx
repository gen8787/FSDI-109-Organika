import React, { Component } from "react"; // imrc

// cc
class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3" style={{ backgroundColor: "rgb(22 94 106)" }}>
        <a className="navbar-brand" href="/#">
          Organika
        </a>
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
            <a className="nav-item nav-link active" href="/#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/#">
              Features
            </a>
            <a className="nav-item nav-link" href="/#">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="/#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

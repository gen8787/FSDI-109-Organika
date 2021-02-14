import React, { Component } from "react"; // imrc
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// cc
class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3" style={{ backgroundColor: "rgb(22 94 106)" }}>

        <Link className="navbar-brand" to="/">
          <img src="/oka.png" width="30" height="30" className="mr-1 d-inline-block align-top" alt=""></img>
            Organika
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item active">
              <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-item nav-link" to="/store">
                Store
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-item nav-link" to="/list">
                Grocery List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-item nav-link" to="/">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-item nav-link" to="/about">
                About Us
              </Link>
            </li>

          </ul>

          <span className="">
            <Link className="nav-item nav-link" to="/about">
              <i style={{ fontSize: "20px" }} className="fa fa-cart-plus mr-1"> </i>
              <span>{this.props.cartCount}</span>
            </Link>
          </span>

        </div>

      </nav>

    );
  }
}

const mapStateToProps = state => {
  return {
    cartCount: state
  };
};

export default connect(mapStateToProps, null)(Navbar);

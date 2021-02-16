import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../cartItem';
import "./cart.css";

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="cart">

                <div className="products-container my-5">
                    <CartItem></CartItem>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, null)(Cart);
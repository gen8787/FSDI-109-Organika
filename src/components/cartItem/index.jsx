import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cartItem.css';
import { removeProductFromCart } from '../../store/actions/actions'

class CartItem extends Component {
    state = {
        total: 0
    }

    render() {
        let total = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
            total += (this.props.cart[i].product.price * this.props.cart[i].qty);
        }

        return (
            <div>

                {this.props.cart.map(item =>
                    <div className="cart-item" key={item.product.id}>
                        <img src={"/img/products/" + item.product.image} alt="prooduct"></img>
                        <p>{item.product.title}</p>
                        <p>${item.product.price.toFixed(2)}</p>
                        <p>Quantity: {item.qty}</p>
                        <p>Total: ${(item.product.price * item.qty).toFixed(2)}</p>
                        <i onClick={() => this.removeItem(item.product.id)} className="ml-5 fa fa-trash"></i>
                    </div>
                )}

                <h1 className="cart-total my-5">Total: ${total.toFixed(2)}</h1>
                <button className="btn btn-lg btn-success">Checkout</button>

            </div>
        );
    }


    // H A N D L E R S
    removeItem = (productId) => {
        this.props.removeProductFromCart(productId)
    }

    // End of Class
}


const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, { removeProductFromCart })(CartItem);
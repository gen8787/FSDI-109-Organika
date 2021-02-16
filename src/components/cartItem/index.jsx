import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cartItem.css';

class CartItem extends Component {
    state = {
        total: 0
    }

    render() {
        return (
            <div>

                {this.props.cart.map(item =>
                    <div className="cart-item" key={item.product.id}>
                        <img src={"/img/products/" + item.product.image} alt="prooduct"></img>
                        <p>{item.product.title}</p>
                        <p>${item.product.price.toFixed(2)}</p>
                        <p>Quantity: {item.qty}</p>
                        <p>Total: ${(item.product.price * item.qty).toFixed(2)}</p>
                        <i onClick={this.handleDelete} className="ml-5 fa fa-trash"></i>
                    </div>
                )}

                <h1 className="cart-total my-5">Total: ${this.state.total.toFixed(2)}</h1>
                <button className="btn btn-lg btn-success">Checkout</button>

            </div>
        );
    }


    // H A N D L E R S
    handleDelete = () => {
        console.log("Clicked!")
    }


    componentDidMount() {
        var total = 0;

        for (let i = 0; i < this.props.cart.length; i++) {
            total += (this.props.cart[i].product.price * this.props.cart[i].qty);
        }

        this.setState({ total: total });

        return total;
    }

    // End of Class
}




const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, null)(CartItem);
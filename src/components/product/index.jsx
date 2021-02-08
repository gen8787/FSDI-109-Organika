import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"

class Product extends Component {
    state = {
        min: 1,
        price: this.props.price,
        total: this.props.price
    }

    render() {
        return (
            <div className="product shadow-sm">
                <img src="https://picsum.photos/230/200" alt="prooduct"></img>
                <p>Product Description Here</p>
                <h6>Price: ${this.state.price.toFixed(2)}</h6>
                <h6>Total: ${this.state.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>

                <QuantityPicker
                    min={this.state.min}
                    onValueChange={this.handleValueChange}
                ></QuantityPicker>

            </div>
        );
    }

    // H A N D L E R S
    handleValueChange = (qty) => {
        let total = this.state.price * qty;
        this.setState({ total: total });
    };

    // E N D   O F   C L A S S
}

export default Product;
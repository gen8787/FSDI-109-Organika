import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"

class Product extends Component {
    state = {
        min: this.props.data.minimum || 1,
        price: this.props.data.price,
        total: this.props.data.price
    }

    render() {
        return (
            <div className="product shadow-sm">
                <img src={"/img/products/" + this.props.data.image} alt="prooduct"></img>
                <p>{this.props.data.title}</p>
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
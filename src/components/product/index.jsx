import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"

class Product extends Component {
    state = {}
    render() {
        return (
            <div className="product shadow-sm">
                <img src="https://picsum.photos/230/200" alt="prooduct"></img>
                <p>Product Description Here</p>
                <h6>Total: 25</h6>
                <h6>Price: $75</h6>

                <QuantityPicker></QuantityPicker>

            </div>
        );
    }
}

export default Product;
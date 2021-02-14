import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"
import { increaseCounter, decreaseCounter } from "../../store/actions/actions";

class Product extends Component {
    state = {
        min: this.props.data.minimum || 1,
        price: this.props.data.price,
        qty: this.props.data.qty || 1,
        total: this.props.data.price
    }

    render() {
        return (
            <div className="product shadow-sm">

                <img src={"/img/products/" + this.props.data.image} alt="prooduct"></img>
                <p className="">{this.props.data.title}</p>
                <h6>Price: ${this.state.price.toFixed(2)}</h6>
                <h6>Total: ${this.state.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>

                <QuantityPicker
                    min={this.state.min}
                    onValueChange={this.handleValueChange}
                ></QuantityPicker>

                <button onClick={this.handleAddProduct} className="btn btn-small btn-primary mt-2 w-75">Add to <i className="fa fa-cart-plus"></i></button>

            </div>
        );
    }

    // H A N D L E R S
    handleValueChange = (qty) => {
        let total = this.state.price * qty;
        this.setState({ qty: qty, total: total });
    };

    handleAddProduct = () => {
        this.props.increaseCounter(this.state.qty);
    };

    // E N D   O F   C L A S S
}

export default connect(null, { increaseCounter, decreaseCounter })(Product);
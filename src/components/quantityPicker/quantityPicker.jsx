import React, { Component } from "react"; // imrc
import './quantityPicker.css';

class QuantityPicker extends Component {
    // cc
    state = {
        quantity: 1,
        name: "Gary",
    };
    // R E N D E R
    render() {
        return (
            <div className="qtyPicker">
                <button onClick={this.decrease} className="btn btn-small btn-danger">-</button>
                <label className="gty font-weight-bold mx-3">{this.state.quantity}</label>
                <button onClick={this.increase} className="btn btn-small btn-success">+</button>
                <br />
                <button onClick={this.increase} className="btn btn-small btn-primary mt-2 w-75">Add to Cart</button>
            </div>
        );
    }

    // I N C R E A S E
    increase = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    };

    // D E C R E A S E
    decrease = () => {
        var qty = this.state.quantity - 1;
        if (qty === 0) qty = 1;
        this.setState({ quantity: qty });
    };
}

export default QuantityPicker;

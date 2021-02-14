import React, { Component } from "react"; // imrc
import './quantityPicker.css';

class QuantityPicker extends Component { // cc
    state = {
        quantity: this.props.min || 1,
        name: "Gary",
    };

    // R E N D E R
    render() {
        return (
            <div className="qtyPicker">

                <button onClick={this.decrease} className="btn btn-small btn-danger">-</button>

                <label className="qty font-weight-bold mx-3">{this.state.quantity}</label>

                <button onClick={this.increase} className="btn btn-small btn-success">+</button>

            </div>
        );
    }

    // I N C R E A S E
    increase = () => {
        let qty = this.state.quantity + 1;
        this.setState({ quantity: qty });

        this.props.onValueChange(qty);
    };

    // D E C R E A S E
    decrease = () => {
        var qty = this.state.quantity - 1;
        if (qty < this.props.min) qty = this.props.min;
        this.setState({ quantity: qty });

        this.props.onValueChange(qty);
    };

}

export default QuantityPicker;
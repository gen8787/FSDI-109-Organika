import React, { Component } from 'react';
import Product from '../product';

class Catalog extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <h1 className="display-4 mb-3">All Products</h1>

                <Product price={20}></Product>
                <Product price={10}></Product>
                <Product price={5}></Product>

                <Product price={50}></Product>
                <Product price={100}></Product>

            </React.Fragment>
        );
    }
}

export default Catalog;
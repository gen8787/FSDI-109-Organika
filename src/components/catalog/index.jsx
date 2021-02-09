import React, { Component } from 'react';
import Product from '../product';
import ProductService from '../../services/productService';

class Catalog extends Component {
    state = {
        allProducts: []
    }


    render() {
        return (
            <React.Fragment>

                <h1 className="display-4 mb-3">All Products</h1>

                <div className="products">
                    {this.state.allProducts.map((prod) => (
                        <Product key={prod.id} data={prod}></Product>
                    ))}
                </div>


            </React.Fragment>
        );
    }


    componentDidMount() {
        let service = new ProductService();
        let data = service.getProducts();

        this.setState({ allProducts: data });
    }


    // E N D   O F   C L A S S
}


export default Catalog;
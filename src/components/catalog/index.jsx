import React, { Component } from 'react';
import Product from '../product';
import ProductService from '../../services/productService';
import './catalog.css';

class Catalog extends Component {
    state = {
        allProducts: [],
        categories: []
    }


    render() {
        return (
            <React.Fragment>

                <div className="categories">
                    <h1 className="display-5 my-3">Product Categories</h1>
                    {this.state.categories.map((cat, i) => (
                        <button onClick={() => this.handleCategoryClick(cat)} key={i} className="btn btn-sm btn-info mr-3">{cat}</button>
                    ))}
                    <hr />
                </div>

                <h1 className="display-4 my-3">All Products</h1>

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

        var cats = [];
        for (let i = 0; i < data.length; i++) {
            let prod = data[i];

            if (!cats.includes(prod.category)) {
                cats.push(prod.category);
            }
        }

        this.setState({ allProducts: data, categories: cats });
    }

    handleCategoryClick = (cat) => {
        console.log(cat)
    }


    // E N D   O F   C L A S S
}


export default Catalog;
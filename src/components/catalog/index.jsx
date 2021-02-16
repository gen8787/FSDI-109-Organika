import React, { Component } from 'react';
import Product from '../product';
import ProductService from '../../services/productService';
import './catalog.css';

class Catalog extends Component {
    state = {
        allProducts: [],
        categories: [],
        selectedCat: ""
    }


    render() {

        var prodsToDisplay = this.state.allProducts;

        if (this.state.selectedCat !== "") {
            prodsToDisplay = prodsToDisplay.filter(prod => prod.category === this.state.selectedCat);
        }

        return (
            <React.Fragment>

                <div className="categories mb-4">
                    <h1 className="display-5 mt-3 mb-4">Product Categories</h1>

                    <button onClick={() => this.handleCategoryClick("")} className="btn btn-sm btn-info mr-3">All Products</button>

                    {this.state.categories.map((cat, i) => (
                        <button onClick={() => this.handleCategoryClick(cat)} key={i} className="btn btn-sm btn-info mr-3">{cat}</button>
                    ))}
                    <hr className="mt-4" />
                </div>

                <h1 className="display-4 my-3">All Products</h1>

                <div className="products">
                    {prodsToDisplay.map((prod) => (
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


    // H A N D L E R S
    handleCategoryClick = (cat) => {
        this.setState({ selectedCat: cat });
    }


    // E N D   O F   C L A S S
}


export default Catalog;
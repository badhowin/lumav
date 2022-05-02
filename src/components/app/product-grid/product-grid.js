import React, { Component } from 'react';
import './product-grid.css';
import ProductCard from "../product-card";


export default class ProductGrid extends Component {



    getElements = ( productList ) => {
        const elements = productList.map((item) => {
            const { id, productName, productPrice, picBase64 } = item;
            return (
                <ProductCard key={ id }
                             productPrice = { productPrice }
                             productName = { productName }
                             picBase64 = { picBase64 }
                             id = { id }
                             onDeleted = { this.props.onDeleted }
                             addProductToCart = { this.props.addProductToCart }
                />
            )
        });
        return elements;
    }

    render(){

        return (

            <div className = "product-grid">
                { this.getElements( this.props.productList ) }
            </div>

        );
    }
}
import React, { Component } from 'react';
import './product-card.css';


export default class ProductCard extends Component {
    render(){

        return (

            <div className = "product-card">
                <div className = "delete-button-wrap">
                    <div className = "delete-button">X</div>
                </div>
                <img className = "product-card-img"></img>
                <div className = "product-name">Product Name</div>
                <div className = "product-price">Product Price</div>
                <button className = "btn-add-to-cart">Add to cart</button>
            </div>

        );
    }
}
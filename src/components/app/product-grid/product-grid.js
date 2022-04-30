import React, { Component } from 'react';
import './product-grid.css';
import ProductCard from "../product-card";


export default class ProductGrid extends Component {
    render(){

        return (

            <div className = "product-grid">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        );
    }
}
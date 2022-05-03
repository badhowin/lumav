import React, { Component } from "react";
import "./product-card.css";

export default class ProductCard extends Component {
  onDeleted = () => {
    this.props.onDeleted(this.props.id);
  };

  addProductToCart = () => {
    this.props.addProductToCart(this.props.id);
  };

  render() {
    return (
      <div className="product-card">
        <div className="delete-button-wrap">
          <div className="delete-button" onClick={this.onDeleted}>
            X
          </div>
        </div>
        <img alt="" className="product-card-img" src={this.props.picBase64}></img>
        <div className="product-name">{this.props.productName}</div>
        <div className="product-price">{this.props.productPrice}</div>
        <button className="btn-add-to-cart" onClick={this.addProductToCart}>
          Add to cart
        </button>
      </div>
    );
  }
}
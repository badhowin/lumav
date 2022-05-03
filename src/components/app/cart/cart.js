import React, { Component } from "react";
import "./cart.css";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        Product in cart {this.props.productInCartCount}
      </div>
    );
  }
}
import React,{ Component } from 'react';

import './app.css';

export default class App extends Component {

  render(){
      return  (

            <div className = "main-container">
                <div className = "add-product-form-header">
                    <h3>Add product form</h3>
                </div>
                <div className = "form-cart-box">
                    <div className = "empty-part box-part">
                    </div>
                    <div className = "form-part box-part">
                        <div className = "add-product-form">
                            <div className = "form-file-input"></div>
                            <input className = "form-name-field"></input>
                            <input className = "form-price-field"></input>
                        </div>
                    </div>
                    <div className = "cart-part box-part">
                        <div className = "cart">Product in cart</div>
                    </div>
                </div>
                <div className = "product-grid">
                    <div className = "product-card">
                        <div className = "delete-button-wrap">
                            <div className = "delete-button">X</div>
                        </div>
                        <img className = "product-card-img"></img>
                        <div className = "product-name">Product Name</div>
                        <div className = "product-price">Product Price</div>
                        <button className = "btn-add-to-cart">Add to cart</button>
                    </div>
                </div>

            </div>

          );
      }
};

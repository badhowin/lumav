
import React,{ Component } from 'react';

import './app.css';
import Cart from "./cart";
import FormHeader from "./form-header";
import AddProductForm from "./add-product-form";
import ProductCard from "./product-card";
import ProductGrid from "./product-grid/product-grid";

export default class App extends Component {

  render(){
      return  (

            <div className = "main-container">

                <FormHeader/>

                <div className = "form-cart-box">

                    <div className = "empty-part box-part">
                    </div>

                    <div className = "form-part box-part">
                        <AddProductForm />
                    </div>

                    <div className = "cart-part box-part">
                        <Cart/>
                    </div>

                </div>

                <ProductGrid/>


            </div>

          );
      }
};

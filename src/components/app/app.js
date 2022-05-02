
import React,{ Component } from 'react';

import './app.css';
import Cart from "./cart";
import FormHeader from "./form-header";
import AddProductForm from "./add-product-form";
import ProductGrid from "./product-grid/product-grid";

export default class App extends Component {

    maxID = 0;

    state = {
        productList: [],
        cart: [],
    }

    addProductCard = ( productCard )=> {

        const id = this.maxID++;
        const newCard = { ...productCard, id };

        this.setState(({ productList })=>{
            const newArr = [
                ...productList,
                newCard,
            ];
            return { productList: newArr};
        });

    }

    deleteProductCard = ( id ) => {
        this.setState(({ productList })=>{
            const newArray = productList.filter((el)=>el.id !== id);
            return {
                productList: newArray
            }
        });
    }

    addProductToCart = ( id ) => {
        this.setState(({ cart })=>{
            const newArr = [
                ...cart,
                id,
            ];
            return { cart: newArr};
        });
    }


  render(){

      const productInCartCount = this.state.cart.length;

      return  (

            <div className = "main-container">

                <FormHeader/>

                <div className = "form-cart-box">

                    <div className = "empty-part box-part">
                    </div>

                    <div className = "form-part box-part">
                        <AddProductForm onCardAdded={ this.addProductCard } />
                    </div>

                    <div className = "cart-part box-part">
                        <Cart productInCartCount = { productInCartCount }/>
                    </div>

                </div>

                <ProductGrid addProductToCart = { this.addProductToCart } productList = { this.state.productList } onDeleted={ this.deleteProductCard }/>


            </div>

          );
      }
};

import React, { Component } from 'react';
import './add-product-form.css';


export default class AddProductForm extends Component {
    render(){

        return (

            <div className = "add-product-form">
                <form>
                    <div className = "form-file-input form-input"></div>
                    <input className = "form-name-field form-input"></input>
                    <input className = "form-price-field form-input"></input>
                    <div className="button-wrapper">
                        <button className = "form-button-submit">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}
import React, { Component } from 'react';
import './add-product-form.css';


export default class AddProductForm extends Component {

    state = {
        fileInputText: "Product image",
        productCard: {
            picFile: "",
            picBase64: "",
            productName: "",
            productPrice: "",
        },
        productPriceWrong: "",
        productNameWrong: "",
        picFileWrong: "",
    }

    choosePic = () => {
        const imgInput  = document.getElementById('img-input');
        imgInput.click();
    }

    imgInputChanged = () => {

        const imgInput  = document.getElementById('img-input');
        const imgFile = imgInput.files[0];

        let productCard = {...this.state.productCard};
        productCard.picFile = imgFile;

        this.setState({
            fileInputText: imgFile.name,
            productCard,
            }
        );
    }

    nameChanged = (e) => {

        let productCard = {...this.state.productCard};
        productCard.productName = e.target.value;
        this.setState({ productCard })

    }

    priceChanged = (e) => {

        let productCard = {...this.state.productCard};
        productCard.productPrice = e.target.value;
        this.setState({ productCard })

    }

    onSubmit = (e) => {

        e.preventDefault();

        const isNameOk = this.isNameOk();
        const isPriceOk = this.isPriceOk();
        const isPicFileOk = this.isPicFileOk();

        if ( isNameOk && isPriceOk && isPicFileOk ) {

            const file = this.state.productCard.picFile;

            const reader = new FileReader();

            reader.onloadend = () => {
                this.cardAdd(reader.result);
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.cardAdd(null);
            }
        }

    }

    cardAdd = ( picBase64 ) => {

        let productCard = {...this.state.productCard};
        productCard.picBase64 = picBase64;
        this.props.onCardAdded( productCard );
        this.setState({
            fileInputText: "Product image",
            productCard: {
                picFile: "",
                picBase64: "",
                productName: "",
                productPrice: "",
            },
            productPriceWrong: null,
            productNameWrong: null,
            picFileWrong: null,
        });

    }

    isNameOk = () => {


        if ( this.state.productCard.productName.length > 0 ) {
            return true;
        }
        this.setState(
            { productNameWrong: "wrong" }
        );

        return  false;
    }

    isPriceOk = () => {

        if ( !isNaN( this.state.productCard.productPrice ) && ( this.state.productCard.productPrice.length ) ){
            return true;
        }
        this.setState(
            { productPriceWrong: "wrong" }
        );
        return  false;

    }

    isPicFileOk = () => {
        if ( this.state.productCard.picFile ){
            return true;
        }
        this.setState(
            { picFileWrong: "wrong" }
        );
        return false;
    }

    render(){

        const productNameClass =  "form-name-field form-input " + this.state.productNameWrong;
        const productPriceClass =  "form-price-field form-input " + this.state.productPriceWrong;
        const picFileClass =  "form-file-input form-input " + this.state.picFileWrong;


        return (

            <div className = "add-product-form">
                <form onSubmit={ this.onSubmit }>
                    <div className = { picFileClass }
                         onClick={ this.choosePic }>
                            { this.state.fileInputText }
                    </div>

                    <input onChange={ this.imgInputChanged } id="img-input" type="file" name="photo" accept="image/*"/>

                    <input className = { productNameClass }
                           onChange={ this.nameChanged }
                           name="productName"
                           value={ this.state.productCard.productName || "" }
                           placeholder="Product name">
                    </input>

                    <input className = { productPriceClass }
                           onChange={ this.priceChanged }
                           name="productPrice"
                           value={ this.state.productCard.productPrice || "" }
                           placeholder="Product price">
                    </input>

                    <div className="button-wrapper">
                        <button className = "form-button-submit">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}
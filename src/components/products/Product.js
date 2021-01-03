import React from 'react';
import CustomButton from '../common/button/CustomButton';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/ProductAction';
import { connect } from 'react-redux';
class Product extends React.Component {

    constructor(props) {
        super(props);


        this.showProduct = this.showProduct.bind(this);
        this.addToCart = this.addToCart.bind(this);

    }




    showProduct(product) {
        let toggleStatus = this.props.modal === false ? true : false;
        this.props.displayModal(product);
        this.setState({ product: product });
        this.props.actions.productAction.toggleModal(toggleStatus);

    }



    addToCart(newProduct) {
        let x = this.props.cart.findIndex((product) => product.productCode === newProduct.productCode);
        if (x === -1) {
            newProduct.quantity = 1;
            this.props.cart.push(newProduct);
            this.props.actions.productAction.addProduct();
        } else {
            let existingProduct = this.props.cart[x];
            existingProduct.quantity = existingProduct.quantity + 1;
            this.props.actions.productAction.addProduct();
        }
    }

    render() {


        let {productCode,productName,productLine,productVendor,productDescription,buyPrice,MSRP} = {...this.props.detail};
        return (
            
            <div className='card-body'>
                <h5 className='card-title'>{productName}</h5>
                <h6 className='card-subtitle text-muted'>{productCode}</h6>
                <p className='card-text'></p>
                            Product Line : {productLine}<br />
                            Product Vendor : {productVendor}<br />
                            Description : {productDescription}<br />
                            Price : {buyPrice}<br />
                            MSRP : {MSRP}<br />
                <CustomButton inputType='button' classStyle='btn btn-warning' inputValue='Show Product' clickHandler={() => this.showProduct(this.props.detail)} />
                <CustomButton inputType='button' classStyle='btn btn-primary' inputValue='Add to Cart' clickHandler={() => this.addToCart(this.props.detail)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.ProductReducer.modalStatus,
        cart: state.ProductReducer.cartProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            productAction: bindActionCreators(productActions, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
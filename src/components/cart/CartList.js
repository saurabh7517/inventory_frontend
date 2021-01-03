import React from 'react'
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/ProductAction';
import { connect } from 'react-redux';
import CustomButton from '../common/button/CustomButton';
import './cartList.css';
class CartList extends React.Component {
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
        this.checkout = this.checkout.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.reduceQuantity = this.reduceQuantity.bind(this);
    }

    addQuantity(product){
        product.quantity = product.quantity + 1;
        this.props.actions.removeAction.addProduct();
    }

    reduceQuantity(product){
        if(product.quantity >= 2){
            product.quantity = product.quantity - 1;
            this.props.actions.removeAction.addProduct();
        }
    }

    remove(product) {
        this.props.actions.removeAction.removeProduct(product);
    }

    checkout() {

    }

    render() {
        // let count = 0;
        return (
            <div id='cart-content'>
                <h3>CartList Page</h3> <br />
                <table id='cart-table'>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th> Action</th>
                    </tr>
                    {this.props.cart.map((product) => {
                        let { productCode,productName,productDescription,buyPrice,quantity } = { ...product };
                        return (
                            <tr key={productCode}>
                                <td>
                                    {productCode}
                                </td>
                                <td>
                                    {productName}
                                </td>
                                <td>
                                    {productDescription}
                                </td>
                                <td>
                                    {buyPrice}
                                </td>

                                <td>
                                    <CustomButton inputType='button' classStyle='btn btn-warning' inputValue='+' clickHandler={() => this.addQuantity(product)}/>
                                    {quantity}
                                    <CustomButton inputType='button' classStyle='btn btn-warning' inputValue='-' clickHandler={() => this.reduceQuantity(product)}/>
                                </td>
                                <td>
                                    <CustomButton inputType='button' classStyle='btn btn-danger' inputValue='Remove' clickHandler={() => this.remove(product)} />
                                    <CustomButton inputType='button' classStyle='btn btn-primary' inputValue='Checkout' clickHandler={this.checkout} />

                                </td>

                            </tr>

                        )
                    })}


                </table>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.ProductReducer.cartProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeAction: bindActionCreators(productActions, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
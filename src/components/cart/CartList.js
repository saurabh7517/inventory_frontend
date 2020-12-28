import React from 'react'
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/ProductAction';
import { connect } from 'react-redux';
import CustomButton from '../common/button/CustomButton';

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
        let count = 0;
        return (
            <React.Fragment>
                <h3>CartList Page</h3> <br />
                <table>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th> Action</th>
                    </tr>
                    {this.props.cart.map((product) => {
                        let { pCode, pName, pDescription, price,quantity } = { ...product };
                        return (
                            <tr key={count}>
                                <td>
                                    {pCode}
                                </td>
                                <td>
                                    {pName}
                                </td>
                                <td>
                                    {pDescription}
                                </td>
                                <td>
                                    {price}
                                </td>

                                <td>
                                    <CustomButton inputType='button' inputValue='+' clickHandler={() => this.addQuantity(product)}/>
                                    {quantity}
                                    <CustomButton inputType='button' inputValue='-' clickHandler={() => this.reduceQuantity(product)}/>
                                </td>
                                <td>
                                    <CustomButton inputType='button' inputValue='Remove' clickHandler={() => this.remove(product)} />
                                    <CustomButton inputType='button' inputValue='Checkout' clickHandler={this.checkout} />

                                </td>

                            </tr>

                        )
                        // { count = count + 1 }
                    })}


                </table>

            </React.Fragment>
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
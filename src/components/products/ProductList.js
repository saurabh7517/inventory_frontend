import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from './Product';
import ProductFilter from './ProductFilter';
import * as productActions from '../../redux/actions/ProductAction';
import ProductPage from './ProductPage';

import './ProductList.css';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(product) {
        this.setState({ product: product });
    }

    componentDidMount() {
        this.props.actions.filterAction.addFilteredProducts(this.props.products);
    }

    render(props) {

        return (
            <div id='main-content'>
                <div className={this.props.modal === true ? 'modalTrue' : 'modalFalse'}>
                    <h3>
                        <ProductPage displayProduct={this.state.product} modal={this.props.modal} />
                    </h3>
                </div>

                <ProductFilter />

                

                <div id='products'>
                    {/* <div id='product-content'> */}
                {/* <h4>ProductList Page</h4> */}
                    {this.props.filterProducts.map((product) => {
                        return (
                            <div key={product.productCode} id='card'>
                                <Product detail={product} displayModal={this.showModal} />
                            </div>
                        );
                    })}
                    {/* </div> */}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        token: state.LoginReducer.token,
        products: state.LoginReducer.products,
        modal: state.ProductReducer.modalStatus,
        cart: state.ProductReducer.cartProducts,
        filterProducts: state.LoginReducer.filteredProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            productAction: bindActionCreators(productActions, dispatch),
            filterAction: bindActionCreators(productActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

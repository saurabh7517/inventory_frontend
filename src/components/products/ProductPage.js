import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/ProductAction';
import './ProductPage.css';

class ProductPage extends React.Component {

    constructor(props) {
        super(props);

        this.trigger = this.trigger.bind(this);
    }

    trigger() {
        this.props.actions.modalToggle.toggleModal(false);
    }

    render() {

        var self = this;
        let {productCode,productName,productLine,productVendor,productDescription,buyPrice,MSRP} = {...this.props.displayProduct};


        return (
            

            <div className='modal-content'>
                Product Page<br/>
                <span className="close" ref={(el) => { self._spanElement = el; }} onClick={this.trigger}>&times;</span><br/>

                
                            Product Code : {productCode}<br />
                            Product Name : {productName}<br />
                            Product Line : {productLine}<br />
                            Product Vendor : {productVendor}<br />
                            Description : {productDescription}<br />
                            Price : {buyPrice}<br />
                            MSRP : {MSRP}<br />
                                {/* <CustomButton inputType='button' inputValue='Show Product' clickHandler={() => this.showProduct(product)} />
                                <CustomButton inputType='button' inputValue='Add to Cart' clickHandler={() => this.addToCart(product)} /> */}
                <div>
                    <h4>Review Section</h4>
                    <h4>Rating section</h4>
                    </div>                
                            
                
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            modalToggle: bindActionCreators(productActions, dispatch)
        }
    }
}


export default connect(null, mapDispatchToProps)(ProductPage);
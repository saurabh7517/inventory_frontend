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
        let {pCode,pName,pLine,pVendor,pDescription,price,msrp} = {...this.props.displayProduct};

        return (
            

            <div className='modal-content'>
                Product Page<br/>
                <span className="close" ref={(el) => { self._spanElement = el; }} onClick={this.trigger}>&times;</span><br/>
                
                            Product Code : {pCode}<br />
                            Product Name : {pName}<br />
                            Product Line : {pLine}<br />
                            Product Vendor : {pVendor}<br />
                            Description : {pDescription}<br />
                            Price : {price}<br />
                            MSRP : {msrp}<br />
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
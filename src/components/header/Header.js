import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../common/button/CustomButton';
import * as loginActions from '../../redux/actions/LoginAction';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as routerPath from '../../router/Config';
import shopping_cart from './shopping_cart.png';
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.handleSelectedChange = this.handleSelectedChange.bind(this);
        this.openCart = this.openCart.bind(this);
    }

    openCart(event) {
        event.preventDefault();
        
        this.props.history.push(routerPath.CART_PATH);

    }

    handleSelectedChange(event) {
        event.preventDefault();
        this.props.history.push(event.target.value);


    }

    logout(event) {
        event.preventDefault();
        this.props.history.push('/');

        this.props.actions.logoutAction.logOutUser();
    }


    conditionalRender() {

        let dropdown = <select name="dropdown" onChange={this.handleSelectedChange}>
            <option value='User' >User</option>
            <option value={routerPath.ACCOUNT_PATH}>account</option>
            <option value={routerPath.MYORDERS_PATH}>my orders</option>
        </select>


        let cartLength = 0;
        this.props.cart.forEach(element => {
            cartLength = cartLength + element.quantity;
        });
        let login_user = this.props.token !== null ? <React.Fragment>
            {dropdown}

            
            <NavLink exact strict to='/products'>Products</NavLink>
            

            <button type='button' value='Cart' className='btn btn-warning' onClick={this.openCart}>Cart <span className='badge bg-light text-dark'>{cartLength}</span></button>
            <CustomButton inputType='button' classStyle='btn btn-danger' inputValue='Logout' clickHandler={this.logout} />

        </React.Fragment> : <NavLink exact strict to='/login'> Login </NavLink>


        return (
            <div id="nav">
                <img src={shopping_cart} alt='shopping_cart'/>
                <NavLink exact strict to='/'>Home</NavLink>
                {login_user}
                <NavLink exact strict to='/aboutus'> About Us</NavLink>
                
            </div>

        )
    }

    render(props) {
        return this.conditionalRender();
    }
}

function mapStateToProps(state) {
    return {
        token: state.LoginReducer.token,
        cart: state.ProductReducer.cartProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            logoutAction: bindActionCreators(loginActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
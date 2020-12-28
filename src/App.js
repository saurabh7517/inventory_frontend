import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Login from './components/login/Login';
import MyAccount from './components/account/Account';
import MyOrder from './components/myorder/MyOrder';
import ProductList from './components/products/ProductList';
import CartList from './components/cart/CartList';
import './App.css';
import PrivateRoute from './components/secure/PrivateRoute';
import * as routerPath from './router/Config';

function App(){
  return(
    <React.Fragment>
      <Header/>
        {/* <Switch> */}
          <Route strict exact path='/' component={Home}/>
          <Route strict exact path='/aboutus' component={AboutUs}/>
          <Route strict path={routerPath.LOGIN_PATH} component={Login}/>
          <PrivateRoute customPath={routerPath.ACCOUNT_PATH} customComp={MyAccount}/>
          <PrivateRoute customPath={routerPath.PRODUCT_PATH} customComp={ProductList}/>
          <PrivateRoute customPath={routerPath.MYORDERS_PATH} customComp={MyOrder}/>
          {/* To Do - Design a cart */}
          <PrivateRoute customPath={routerPath.CART_PATH} customComp={CartList}/>
    </React.Fragment>
    
  )
  
}

export default App;

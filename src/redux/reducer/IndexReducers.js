import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import ProductReducer from '../reducer/ProductReducer';
const RootReducer = combineReducers(
    {
        LoginReducer: LoginReducer,
        ProductReducer: ProductReducer
    }
)

export default RootReducer;
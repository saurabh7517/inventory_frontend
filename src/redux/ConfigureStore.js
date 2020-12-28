import {createStore} from 'redux';
import RootReducer from './reducer/IndexReducers'
// import LoginReducer from './reducer/LoginReducer';
import InitialState from './reducer/IntialState';
function configureStore(){
    return createStore(RootReducer,InitialState)
}

export default configureStore;
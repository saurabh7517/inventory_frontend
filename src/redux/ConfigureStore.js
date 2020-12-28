import {createStore} from 'redux';
import RootReducer from './reducer/IndexReducers'
// import LoginReducer from './reducer/LoginReducer';
import initialState from './reducer/IntialState';
function configureStore(){
    return createStore(RootReducer,initialState)
}

export default configureStore;
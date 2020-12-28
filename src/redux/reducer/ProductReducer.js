import * as actionTypes from '../actions/ActionTypes';
import CartInitialState from './CartInitialState';
function ProductReducer(state=CartInitialState,action){
    switch(action.type){
        case actionTypes.PRODUCT_ADDED : return { ...state, cartProducts: [...state.cartProducts] } 
        
        
                                        
        case actionTypes.PRODUCT_REMOVED : return {...state, cartProducts : state.cartProducts.filter((p) => p.pCode !== action.product.pCode)};
        case actionTypes.TOGGLE_MODAL : return {...state, modalStatus : action.modalStatus}
        
        default : return state; 

    }
}

export default ProductReducer;
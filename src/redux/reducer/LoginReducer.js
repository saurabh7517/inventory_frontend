import * as actionTypes from '../actions/ActionTypes';
import InitialState from './IntialState';
export default function LoginReducer(state = InitialState,action){
    switch(action.type){
        case actionTypes.LOGIN_SUCESS :  return {...state, token : action.token};//get a token from backend and set the username and token feild.

        case actionTypes.FILTER :  return {...state,filteredProducts: [...action.products]}

        case actionTypes.LOGOUT :   return {...state, token : null};
             
        case actionTypes.LOGIN_FAILED : return state;//donot set the token and username
                
        default : return state;
    }
}


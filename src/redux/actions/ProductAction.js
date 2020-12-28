import * as actionTypes from './ActionTypes';

function productAddition(){
    return {
        type: actionTypes.PRODUCT_ADDED,        
    }
}

function filterAddition(products){
    return {
        type : actionTypes.FILTER,
        products : products
    }
}

function productRemoval(product){
    return{
        type: actionTypes.PRODUCT_REMOVED,
        product : product
    }
}

export function toggleModal(boolVal){
    return {
        type : actionTypes.TOGGLE_MODAL,
        modalStatus : boolVal
    }
}

export function addProduct(){
    return productAddition();
}

export function addFilteredProducts(products){
    return filterAddition(products);
}

export function removeProduct(product){
    return productRemoval(product);
}


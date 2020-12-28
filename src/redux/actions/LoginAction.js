import * as actionTypes from './ActionTypes';

function LoginSuccess(token){
    return {
        type: actionTypes.LOGIN_SUCESS,
        token : token
    }
}

function LogoutSuccess(){
    return{
        type : actionTypes.LOGOUT
    }
}



function LoginFailed(){
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export function validateLogin(userInfo){
    if(userInfo.username === 'saurabh' && userInfo.password === 'pass'){

        return LoginSuccess(userInfo.username);
    }else{
        return LoginFailed();
    }
    
}

export function logOutUser(){
    return LogoutSuccess();
}
import React from 'react';
import {connect} from 'react-redux';
class  MyAccount extends React.Component{

    render(){
        return(
            <React.Fragment>
                <h4>Account Page</h4>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state){
    return{
        token: state.LoginReducer.token
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyAccount);
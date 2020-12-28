import React from 'react';
import { connect } from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import * as routerPath from '../../router/Config';
class PrivateRoute extends React.Component{


    render(props){
        
        if(this.props.token !== null){
            return <Route path={this.props.customPath} component={this.props.customComp}/>

        }else{
            return <Redirect to={routerPath.LOGIN_PATH}/>
        }
            
        }
}


function mapStateToProps(state){
    return{
        token: state.LoginReducer.token
    }
}

function mapDispatchToProps(dipatch){
    return{
        actions : {

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);
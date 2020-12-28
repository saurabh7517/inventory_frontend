import React from 'react';
import CustomTextBox from '../common/textBox/CustomTextBox';
import CustomButton from '../common/button/CustomButton';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/actions/LoginAction';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.clickEvent = this.clickEvent.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleUserNameChange(event){
        this.setState({
            username:event.target.value
        })
    }



    clickEvent(event){
        event.preventDefault();
        // console.log("button is clicked");
        // event.preventDefault();
        let userInfo = {
            username : this.state.username,
            password : this.state.password
        };
        // this.props.store.dispatch({type:"LOGIN_SUCCESS",token:userInfo.username});
        this.props.actions.loginSubmit.validateLogin(userInfo);
        if(userInfo.username === 'saurabh'){
            this.props.history.push('/products');
        }else{
            this.props.history.push('/login');
        }
        
        

    }

    conditionalRender(){


    }

    render(props){
        // var common = this.props.token=== 'saurabh' ? <div>Current User is : {this.props.token}</div> : <div>User not logged in</div>
        return(
            <React.Fragment>
                <CustomTextBox inputType="text" inputPlaceHolder="Enter your email as username" changeHandler={this.handleUserNameChange}/>
                <CustomTextBox inputType="text" inputPlaceHolder="Enter your password" changeHandler={this.handlePasswordChange}/>
                <CustomButton inputType="button" inputValue="Login" clickHandler={ this.clickEvent}/>
                {/* {common} */}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        token:state.LoginReducer.token
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            loginSubmit: bindActionCreators(loginActions,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));

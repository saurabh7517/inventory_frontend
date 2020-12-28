import React from 'react';
function CustomTextBox(props){
    return(
        <React.Fragment>
            <input type={props.inputType} placeholder={props.inputPlaceHolder} onChange={props.changeHandler}/>
        </React.Fragment>
    )
}

export default CustomTextBox;
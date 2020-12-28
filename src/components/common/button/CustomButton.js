import React from 'react';
function CustomButton(props){
    return(
        <React.Fragment>
            <input type={props.inputType} value={props.inputValue} onClick={props.clickHandler}/>
        </React.Fragment>
    )
}

export default CustomButton;
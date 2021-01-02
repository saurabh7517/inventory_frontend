import React from 'react';
function CustomButton(props){
    let buttonStyle = {
        marginTop:'10px',
        marginLeft:'10px',
        padding:'5px'

    }
    return(
        <React.Fragment>
            <input style={buttonStyle} type={props.inputType} value={props.inputValue} onClick={props.clickHandler}/>
        </React.Fragment>
    )
}

export default CustomButton;
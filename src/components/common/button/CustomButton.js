import React from 'react';
function CustomButton(props){

    return(
        <React.Fragment>
            <input className={props.classStyle} type={props.inputType} value={props.inputValue} onClick={props.clickHandler}/>
        </React.Fragment>
    )
}

export default CustomButton;
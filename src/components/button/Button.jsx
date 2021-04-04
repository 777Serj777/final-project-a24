import React from 'react';
import './style.scss';

const Button = ({children, ...props}) => {

    return (
        <input
            {...props} 
            className = {`button${(props.className) ? ' '+props.className : ''}`} 
            type = {(props.type === 'submit') ? props.type : "button"}
            defaultValue = {children}
        />  
    )
}

export default Button;
import React from 'react';
import { StyleButton } from './style';


const Button = ({children, ...props}) => {

    return (
 
         <StyleButton
            {...props} 
            type = {(props.type === 'submit') ? props.type : "button"}
            defaultValue = {children}
        />  
  
    )
}

export default Button;
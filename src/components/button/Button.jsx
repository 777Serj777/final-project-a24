import styled from "styled-components";
import {colors} from '../../style/variables';



const StyleButton = styled.input`
    width: 100%;
    min-width: ${({minWidth}) => minWidth || 'auto'};
    max-width: ${({maxWidth}) => maxWidth || 'auto'};
    min-height: ${({minHeight}) => minHeight || 'auto'};
    max-height: ${({maxHeight}) => maxHeight || 'auto'};
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: ${({bRadius}) => bRadius || '.5rem'};
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    margin-top: ${props => props.mt || 0};
    margin-left: ${props => props.ml || 0};
    margin-right: ${props => props.mr || 0};
    background: url(${({img}) => img}) no-repeat center;
    background-color: ${colors.buttonColor};
    color: ${colors.buttonColorText};
    
`

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
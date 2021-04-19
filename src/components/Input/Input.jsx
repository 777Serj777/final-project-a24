import ErrorMessage from "../errorMessage/ErrorMessage"
import StyleInput from "./StyleInput"


const Input = ({

    errors , 
    handleChange, 
    label, 
    name,
    className, 
    ...props

}) => {



    return (
        <p className = {className}>
            <StyleInput label = {(label) ? label : ''}>
                <input                  
                    name = {(name) ? name : ''} 
                    onChange = {handleChange}
                    {...props}
                />
                {(errors && errors[name]) && <ErrorMessage>{errors[name]}</ErrorMessage>} 
            </StyleInput>              
        </p> 
    )
}

export default Input;
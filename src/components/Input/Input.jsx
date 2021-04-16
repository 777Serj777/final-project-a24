import ErrorMessage from "../errorMessage/ErrorMessage"
import Wrapper from "../wrapper/Wrapper"
import StyleInput from "./StyleInput"



const Input = ({errors , handleChange, ...props}) => {
    
    return (
        <Wrapper mCenter maxWidth = {'35rem'}>
            <StyleInput label = {props.label}>
                <input                  
                    name = {props.name}
                    placeholder = {`Enter you ${props.name}...`} 
                    onChange = {handleChange}
                />
            </StyleInput>              
            {(errors.login) && <ErrorMessage>{errors.login}</ErrorMessage>} 
        </Wrapper> 
    )
}

export default Input;
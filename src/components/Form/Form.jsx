import { useState } from "react";
import styled from "styled-components";

const StyleForm = styled.form`




`

const Form = ({children, ...props}) => {



    return (
        <StyleForm {...props}>
            {children}
        </StyleForm>
    )
}


export default Form;










/**export const InputText = (props) => {} 



const Form = ({children, submitValue, ...props}) => {

const [values, error, handleChange] = useForm();

const register = e => {
    e.preventDefault()

}
  
    return (
        <form  {...props}>
             {
                children.map(({props}) => <Input error = {error}  key = {props.name} {...props} value = {values.name} onChange = {handleChange} />)
             }
             <Button type = 'submit' value = {submitValue}/>
      
        </form>
    )
}
 */
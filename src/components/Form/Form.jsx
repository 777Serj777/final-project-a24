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










/**







const register = e => {
    e.preventDefault()


  
  
  
             {
                children.map(({props}) => <Input error = {error}  key = {props.name} {...props} value = {values.name}  />)
             }
          
      
      

 */
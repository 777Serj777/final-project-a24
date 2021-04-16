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








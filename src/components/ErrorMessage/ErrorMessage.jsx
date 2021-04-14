import styled from "styled-components";

const StyleErrorMessage = styled.span`

    color: red;
    margin-left: 1.5rem;

`

const ErrorMessage = ({children, ...props}) => {
    const {message} = children;
    
    return (
        <StyleErrorMessage {...props}>
            {message}
        </StyleErrorMessage>
    )
}


export default ErrorMessage;
import styled from "styled-components";

const StyleErrorMessage = styled.span`

    color: red;
    margin-left: 1.5rem;

`

const ErrorMessage = ({children, ...props}) => {

    return (
        <StyleErrorMessage {...props}>
            {children}
        </StyleErrorMessage>
    )
}


export default ErrorMessage;
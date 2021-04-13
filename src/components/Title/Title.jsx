import styled from "styled-components";

const StyleTitle = styled.h2`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 400;
   
`

const Title = ({children, ...props}) => {

    return (
        <StyleTitle {...props}>
            {children}
        </StyleTitle>
    )
}


export default Title;